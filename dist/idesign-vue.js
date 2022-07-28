import { defineComponent as _n, computed as X, resolveComponent as Wt, openBlock as K, createElementBlock as j, normalizeClass as ue, unref as hn, createBlock as Or, createCommentVNode as Sn, renderSlot as xn, getCurrentInstance as Zv, normalizeStyle as ye, createVNode as en, provide as Br, inject as $r, ref as vn, onMounted as Ot, onUnmounted as mu, reactive as wu, watchEffect as Rr, createElementVNode as ut, Transition as Bt, withCtx as Ge, Fragment as kv, createTextVNode as no, toDisplayString as yu, watch as Et, cloneVNode as jf, isVNode as Jv, Teleport as Qv } from "vue";
const Vv = /* @__PURE__ */ _n({
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
  setup(o, { emit: x }) {
    const u = (S) => {
      o.disabled || x("click", S);
    }, m = X(() => [
      "i-button",
      `i-button--type-${o.type}`,
      o.variant !== "base" && `i-button--variant-${o.variant}`,
      o.size !== "medium" && `i-button--size-${o.size}`,
      o.shape !== "round" && `i-button--shape-${o.shape}`,
      o.active && "i-button-active",
      o.disabled && "i-button-disabled"
    ]);
    return (S, b) => {
      const A = Wt("i-icon");
      return K(), j("button", {
        class: ue(hn(m)),
        onClick: u
      }, [
        o.icon ? (K(), Or(A, {
          key: 0,
          class: "i-button-icon",
          name: o.icon
        }, null, 8, ["name"])) : Sn("", !0),
        xn(S.$slots, "default")
      ], 2);
    };
  }
});
const ru = {
  install(o) {
    o.component("i-button", Vv);
  }
};
var Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(o, x) {
  (function() {
    var u, m = "4.17.21", S = 200, b = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", A = "Expected a function", I = "Invalid `variable` option passed into `_.template`", an = "__lodash_hash_undefined__", P = 500, y = "__lodash_placeholder__", O = 1, nn = 2, J = 4, ln = 1, pn = 2, tn = 1, bn = 2, zn = 4, B = 8, q = 16, w = 32, D = 64, Z = 128, Tn = 256, Nn = 512, Vn = 30, We = "...", $t = 800, Mt = 16, lt = 1, to = 2, ro = 3, Oe = 1 / 0, xe = 9007199254740991, io = 17976931348623157e292, Nt = 0 / 0, le = 4294967295, uo = le - 1, lo = le >>> 1, fo = [
      ["ary", Z],
      ["bind", tn],
      ["bindKey", bn],
      ["curry", B],
      ["curryRight", q],
      ["flip", Nn],
      ["partial", w],
      ["partialRight", D],
      ["rearg", Tn]
    ], ze = "[object Arguments]", Pt = "[object Array]", oo = "[object AsyncFunction]", ft = "[object Boolean]", ot = "[object Date]", ao = "[object DOMException]", Ft = "[object Error]", Dt = "[object Function]", xu = "[object GeneratorFunction]", jn = "[object Map]", at = "[object Number]", so = "[object Null]", se = "[object Object]", bu = "[object Promise]", co = "[object Proxy]", st = "[object RegExp]", ne = "[object Set]", ct = "[object String]", Ut = "[object Symbol]", ho = "[object Undefined]", ht = "[object WeakMap]", go = "[object WeakSet]", dt = "[object ArrayBuffer]", Ye = "[object DataView]", Nr = "[object Float32Array]", Pr = "[object Float64Array]", Fr = "[object Int8Array]", Dr = "[object Int16Array]", Ur = "[object Int32Array]", Hr = "[object Uint8Array]", Gr = "[object Uint8ClampedArray]", zr = "[object Uint16Array]", Yr = "[object Uint32Array]", vo = /\b__p \+= '';/g, _o = /\b(__p \+=) '' \+/g, po = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Au = /&(?:amp|lt|gt|quot|#39);/g, Cu = /[&<>"']/g, mo = RegExp(Au.source), wo = RegExp(Cu.source), yo = /<%-([\s\S]+?)%>/g, xo = /<%([\s\S]+?)%>/g, Su = /<%=([\s\S]+?)%>/g, bo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ao = /^\w*$/, Co = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xr = /[\\^$.*+?()[\]{}|]/g, So = RegExp(Xr.source), qr = /^\s+/, To = /\s/, Lo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Io = /\{\n\/\* \[wrapped with (.+)\] \*/, Ro = /,? & /, Eo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Wo = /[()=,{}\[\]\/\s]/, Oo = /\\(\\)?/g, Bo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Tu = /\w*$/, $o = /^[-+]0x[0-9a-f]+$/i, Mo = /^0b[01]+$/i, No = /^\[object .+?Constructor\]$/, Po = /^0o[0-7]+$/i, Fo = /^(?:0|[1-9]\d*)$/, Do = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ht = /($^)/, Uo = /['\n\r\u2028\u2029\\]/g, Gt = "\\ud800-\\udfff", Ho = "\\u0300-\\u036f", Go = "\\ufe20-\\ufe2f", zo = "\\u20d0-\\u20ff", Lu = Ho + Go + zo, Iu = "\\u2700-\\u27bf", Ru = "a-z\\xdf-\\xf6\\xf8-\\xff", Yo = "\\xac\\xb1\\xd7\\xf7", Xo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", qo = "\\u2000-\\u206f", Ko = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Eu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Wu = "\\ufe0e\\ufe0f", Ou = Yo + Xo + qo + Ko, Kr = "['\u2019]", Zo = "[" + Gt + "]", Bu = "[" + Ou + "]", zt = "[" + Lu + "]", $u = "\\d+", ko = "[" + Iu + "]", Mu = "[" + Ru + "]", Nu = "[^" + Gt + Ou + $u + Iu + Ru + Eu + "]", Zr = "\\ud83c[\\udffb-\\udfff]", Jo = "(?:" + zt + "|" + Zr + ")", Pu = "[^" + Gt + "]", kr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Jr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Xe = "[" + Eu + "]", Fu = "\\u200d", Du = "(?:" + Mu + "|" + Nu + ")", Qo = "(?:" + Xe + "|" + Nu + ")", Uu = "(?:" + Kr + "(?:d|ll|m|re|s|t|ve))?", Hu = "(?:" + Kr + "(?:D|LL|M|RE|S|T|VE))?", Gu = Jo + "?", zu = "[" + Wu + "]?", Vo = "(?:" + Fu + "(?:" + [Pu, kr, Jr].join("|") + ")" + zu + Gu + ")*", jo = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", na = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Yu = zu + Gu + Vo, ea = "(?:" + [ko, kr, Jr].join("|") + ")" + Yu, ta = "(?:" + [Pu + zt + "?", zt, kr, Jr, Zo].join("|") + ")", ra = RegExp(Kr, "g"), ia = RegExp(zt, "g"), Qr = RegExp(Zr + "(?=" + Zr + ")|" + ta + Yu, "g"), ua = RegExp([
      Xe + "?" + Mu + "+" + Uu + "(?=" + [Bu, Xe, "$"].join("|") + ")",
      Qo + "+" + Hu + "(?=" + [Bu, Xe + Du, "$"].join("|") + ")",
      Xe + "?" + Du + "+" + Uu,
      Xe + "+" + Hu,
      na,
      jo,
      $u,
      ea
    ].join("|"), "g"), la = RegExp("[" + Fu + Gt + Lu + Wu + "]"), fa = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, oa = [
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
    ], aa = -1, fn = {};
    fn[Nr] = fn[Pr] = fn[Fr] = fn[Dr] = fn[Ur] = fn[Hr] = fn[Gr] = fn[zr] = fn[Yr] = !0, fn[ze] = fn[Pt] = fn[dt] = fn[ft] = fn[Ye] = fn[ot] = fn[Ft] = fn[Dt] = fn[jn] = fn[at] = fn[se] = fn[st] = fn[ne] = fn[ct] = fn[ht] = !1;
    var un = {};
    un[ze] = un[Pt] = un[dt] = un[Ye] = un[ft] = un[ot] = un[Nr] = un[Pr] = un[Fr] = un[Dr] = un[Ur] = un[jn] = un[at] = un[se] = un[st] = un[ne] = un[ct] = un[Ut] = un[Hr] = un[Gr] = un[zr] = un[Yr] = !0, un[Ft] = un[Dt] = un[ht] = !1;
    var sa = {
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
    }, ca = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, ha = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, da = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ga = parseFloat, va = parseInt, Xu = typeof Rt == "object" && Rt && Rt.Object === Object && Rt, _a = typeof self == "object" && self && self.Object === Object && self, An = Xu || _a || Function("return this")(), Vr = x && !x.nodeType && x, Be = Vr && !0 && o && !o.nodeType && o, qu = Be && Be.exports === Vr, jr = qu && Xu.process, Yn = function() {
      try {
        var c = Be && Be.require && Be.require("util").types;
        return c || jr && jr.binding && jr.binding("util");
      } catch {
      }
    }(), Ku = Yn && Yn.isArrayBuffer, Zu = Yn && Yn.isDate, ku = Yn && Yn.isMap, Ju = Yn && Yn.isRegExp, Qu = Yn && Yn.isSet, Vu = Yn && Yn.isTypedArray;
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
    function pa(c, g, d, T) {
      for (var $ = -1, k = c == null ? 0 : c.length; ++$ < k; ) {
        var mn = c[$];
        g(T, mn, d(mn), c);
      }
      return T;
    }
    function Xn(c, g) {
      for (var d = -1, T = c == null ? 0 : c.length; ++d < T && g(c[d], d, c) !== !1; )
        ;
      return c;
    }
    function ma(c, g) {
      for (var d = c == null ? 0 : c.length; d-- && g(c[d], d, c) !== !1; )
        ;
      return c;
    }
    function ju(c, g) {
      for (var d = -1, T = c == null ? 0 : c.length; ++d < T; )
        if (!g(c[d], d, c))
          return !1;
      return !0;
    }
    function be(c, g) {
      for (var d = -1, T = c == null ? 0 : c.length, $ = 0, k = []; ++d < T; ) {
        var mn = c[d];
        g(mn, d, c) && (k[$++] = mn);
      }
      return k;
    }
    function Yt(c, g) {
      var d = c == null ? 0 : c.length;
      return !!d && qe(c, g, 0) > -1;
    }
    function ni(c, g, d) {
      for (var T = -1, $ = c == null ? 0 : c.length; ++T < $; )
        if (d(g, c[T]))
          return !0;
      return !1;
    }
    function on(c, g) {
      for (var d = -1, T = c == null ? 0 : c.length, $ = Array(T); ++d < T; )
        $[d] = g(c[d], d, c);
      return $;
    }
    function Ae(c, g) {
      for (var d = -1, T = g.length, $ = c.length; ++d < T; )
        c[$ + d] = g[d];
      return c;
    }
    function ei(c, g, d, T) {
      var $ = -1, k = c == null ? 0 : c.length;
      for (T && k && (d = c[++$]); ++$ < k; )
        d = g(d, c[$], $, c);
      return d;
    }
    function wa(c, g, d, T) {
      var $ = c == null ? 0 : c.length;
      for (T && $ && (d = c[--$]); $--; )
        d = g(d, c[$], $, c);
      return d;
    }
    function ti(c, g) {
      for (var d = -1, T = c == null ? 0 : c.length; ++d < T; )
        if (g(c[d], d, c))
          return !0;
      return !1;
    }
    var ya = ri("length");
    function xa(c) {
      return c.split("");
    }
    function ba(c) {
      return c.match(Eo) || [];
    }
    function nl(c, g, d) {
      var T;
      return d(c, function($, k, mn) {
        if (g($, k, mn))
          return T = k, !1;
      }), T;
    }
    function Xt(c, g, d, T) {
      for (var $ = c.length, k = d + (T ? 1 : -1); T ? k-- : ++k < $; )
        if (g(c[k], k, c))
          return k;
      return -1;
    }
    function qe(c, g, d) {
      return g === g ? $a(c, g, d) : Xt(c, el, d);
    }
    function Aa(c, g, d, T) {
      for (var $ = d - 1, k = c.length; ++$ < k; )
        if (T(c[$], g))
          return $;
      return -1;
    }
    function el(c) {
      return c !== c;
    }
    function tl(c, g) {
      var d = c == null ? 0 : c.length;
      return d ? ui(c, g) / d : Nt;
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
    function rl(c, g, d, T, $) {
      return $(c, function(k, mn, rn) {
        d = T ? (T = !1, k) : g(d, k, mn, rn);
      }), d;
    }
    function Ca(c, g) {
      var d = c.length;
      for (c.sort(g); d--; )
        c[d] = c[d].value;
      return c;
    }
    function ui(c, g) {
      for (var d, T = -1, $ = c.length; ++T < $; ) {
        var k = g(c[T]);
        k !== u && (d = d === u ? k : d + k);
      }
      return d;
    }
    function li(c, g) {
      for (var d = -1, T = Array(c); ++d < c; )
        T[d] = g(d);
      return T;
    }
    function Sa(c, g) {
      return on(g, function(d) {
        return [d, c[d]];
      });
    }
    function il(c) {
      return c && c.slice(0, ol(c) + 1).replace(qr, "");
    }
    function Fn(c) {
      return function(g) {
        return c(g);
      };
    }
    function fi(c, g) {
      return on(g, function(d) {
        return c[d];
      });
    }
    function gt(c, g) {
      return c.has(g);
    }
    function ul(c, g) {
      for (var d = -1, T = c.length; ++d < T && qe(g, c[d], 0) > -1; )
        ;
      return d;
    }
    function ll(c, g) {
      for (var d = c.length; d-- && qe(g, c[d], 0) > -1; )
        ;
      return d;
    }
    function Ta(c, g) {
      for (var d = c.length, T = 0; d--; )
        c[d] === g && ++T;
      return T;
    }
    var La = ii(sa), Ia = ii(ca);
    function Ra(c) {
      return "\\" + da[c];
    }
    function Ea(c, g) {
      return c == null ? u : c[g];
    }
    function Ke(c) {
      return la.test(c);
    }
    function Wa(c) {
      return fa.test(c);
    }
    function Oa(c) {
      for (var g, d = []; !(g = c.next()).done; )
        d.push(g.value);
      return d;
    }
    function oi(c) {
      var g = -1, d = Array(c.size);
      return c.forEach(function(T, $) {
        d[++g] = [$, T];
      }), d;
    }
    function fl(c, g) {
      return function(d) {
        return c(g(d));
      };
    }
    function Ce(c, g) {
      for (var d = -1, T = c.length, $ = 0, k = []; ++d < T; ) {
        var mn = c[d];
        (mn === g || mn === y) && (c[d] = y, k[$++] = d);
      }
      return k;
    }
    function qt(c) {
      var g = -1, d = Array(c.size);
      return c.forEach(function(T) {
        d[++g] = T;
      }), d;
    }
    function Ba(c) {
      var g = -1, d = Array(c.size);
      return c.forEach(function(T) {
        d[++g] = [T, T];
      }), d;
    }
    function $a(c, g, d) {
      for (var T = d - 1, $ = c.length; ++T < $; )
        if (c[T] === g)
          return T;
      return -1;
    }
    function Ma(c, g, d) {
      for (var T = d + 1; T--; )
        if (c[T] === g)
          return T;
      return T;
    }
    function Ze(c) {
      return Ke(c) ? Pa(c) : ya(c);
    }
    function ee(c) {
      return Ke(c) ? Fa(c) : xa(c);
    }
    function ol(c) {
      for (var g = c.length; g-- && To.test(c.charAt(g)); )
        ;
      return g;
    }
    var Na = ii(ha);
    function Pa(c) {
      for (var g = Qr.lastIndex = 0; Qr.test(c); )
        ++g;
      return g;
    }
    function Fa(c) {
      return c.match(Qr) || [];
    }
    function Da(c) {
      return c.match(ua) || [];
    }
    var Ua = function c(g) {
      g = g == null ? An : ke.defaults(An.Object(), g, ke.pick(An, oa));
      var d = g.Array, T = g.Date, $ = g.Error, k = g.Function, mn = g.Math, rn = g.Object, ai = g.RegExp, Ha = g.String, qn = g.TypeError, Kt = d.prototype, Ga = k.prototype, Je = rn.prototype, Zt = g["__core-js_shared__"], kt = Ga.toString, V = Je.hasOwnProperty, za = 0, al = function() {
        var n = /[^.]+$/.exec(Zt && Zt.keys && Zt.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Jt = Je.toString, Ya = kt.call(rn), Xa = An._, qa = ai("^" + kt.call(V).replace(Xr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Qt = qu ? g.Buffer : u, Se = g.Symbol, Vt = g.Uint8Array, sl = Qt ? Qt.allocUnsafe : u, jt = fl(rn.getPrototypeOf, rn), cl = rn.create, hl = Je.propertyIsEnumerable, nr = Kt.splice, dl = Se ? Se.isConcatSpreadable : u, vt = Se ? Se.iterator : u, $e = Se ? Se.toStringTag : u, er = function() {
        try {
          var n = De(rn, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Ka = g.clearTimeout !== An.clearTimeout && g.clearTimeout, Za = T && T.now !== An.Date.now && T.now, ka = g.setTimeout !== An.setTimeout && g.setTimeout, tr = mn.ceil, rr = mn.floor, si = rn.getOwnPropertySymbols, Ja = Qt ? Qt.isBuffer : u, gl = g.isFinite, Qa = Kt.join, Va = fl(rn.keys, rn), wn = mn.max, Ln = mn.min, ja = T.now, ns = g.parseInt, vl = mn.random, es = Kt.reverse, ci = De(g, "DataView"), _t = De(g, "Map"), hi = De(g, "Promise"), Qe = De(g, "Set"), pt = De(g, "WeakMap"), mt = De(rn, "create"), ir = pt && new pt(), Ve = {}, ts = Ue(ci), rs = Ue(_t), is = Ue(hi), us = Ue(Qe), ls = Ue(pt), ur = Se ? Se.prototype : u, wt = ur ? ur.valueOf : u, _l = ur ? ur.toString : u;
      function l(n) {
        if (cn(n) && !N(n) && !(n instanceof z)) {
          if (n instanceof Kn)
            return n;
          if (V.call(n, "__wrapped__"))
            return mf(n);
        }
        return new Kn(n);
      }
      var je = function() {
        function n() {
        }
        return function(e) {
          if (!sn(e))
            return {};
          if (cl)
            return cl(e);
          n.prototype = e;
          var t = new n();
          return n.prototype = u, t;
        };
      }();
      function lr() {
      }
      function Kn(n, e) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = u;
      }
      l.templateSettings = {
        escape: yo,
        evaluate: xo,
        interpolate: Su,
        variable: "",
        imports: {
          _: l
        }
      }, l.prototype = lr.prototype, l.prototype.constructor = l, Kn.prototype = je(lr.prototype), Kn.prototype.constructor = Kn;
      function z(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = le, this.__views__ = [];
      }
      function fs() {
        var n = new z(this.__wrapped__);
        return n.__actions__ = On(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = On(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = On(this.__views__), n;
      }
      function os() {
        if (this.__filtered__) {
          var n = new z(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function as() {
        var n = this.__wrapped__.value(), e = this.__dir__, t = N(n), r = e < 0, i = t ? n.length : 0, f = xc(0, i, this.__views__), a = f.start, s = f.end, h = s - a, v = r ? s : a - 1, _ = this.__iteratees__, p = _.length, C = 0, L = Ln(h, this.__takeCount__);
        if (!t || !r && i == h && L == h)
          return Ul(n, this.__actions__);
        var E = [];
        n:
          for (; h-- && C < L; ) {
            v += e;
            for (var U = -1, W = n[v]; ++U < p; ) {
              var G = _[U], Y = G.iteratee, Hn = G.type, Wn = Y(W);
              if (Hn == to)
                W = Wn;
              else if (!Wn) {
                if (Hn == lt)
                  continue n;
                break n;
              }
            }
            E[C++] = W;
          }
        return E;
      }
      z.prototype = je(lr.prototype), z.prototype.constructor = z;
      function Me(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function ss() {
        this.__data__ = mt ? mt(null) : {}, this.size = 0;
      }
      function cs(n) {
        var e = this.has(n) && delete this.__data__[n];
        return this.size -= e ? 1 : 0, e;
      }
      function hs(n) {
        var e = this.__data__;
        if (mt) {
          var t = e[n];
          return t === an ? u : t;
        }
        return V.call(e, n) ? e[n] : u;
      }
      function ds(n) {
        var e = this.__data__;
        return mt ? e[n] !== u : V.call(e, n);
      }
      function gs(n, e) {
        var t = this.__data__;
        return this.size += this.has(n) ? 0 : 1, t[n] = mt && e === u ? an : e, this;
      }
      Me.prototype.clear = ss, Me.prototype.delete = cs, Me.prototype.get = hs, Me.prototype.has = ds, Me.prototype.set = gs;
      function ce(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function vs() {
        this.__data__ = [], this.size = 0;
      }
      function _s(n) {
        var e = this.__data__, t = fr(e, n);
        if (t < 0)
          return !1;
        var r = e.length - 1;
        return t == r ? e.pop() : nr.call(e, t, 1), --this.size, !0;
      }
      function ps(n) {
        var e = this.__data__, t = fr(e, n);
        return t < 0 ? u : e[t][1];
      }
      function ms(n) {
        return fr(this.__data__, n) > -1;
      }
      function ws(n, e) {
        var t = this.__data__, r = fr(t, n);
        return r < 0 ? (++this.size, t.push([n, e])) : t[r][1] = e, this;
      }
      ce.prototype.clear = vs, ce.prototype.delete = _s, ce.prototype.get = ps, ce.prototype.has = ms, ce.prototype.set = ws;
      function he(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function ys() {
        this.size = 0, this.__data__ = {
          hash: new Me(),
          map: new (_t || ce)(),
          string: new Me()
        };
      }
      function xs(n) {
        var e = wr(this, n).delete(n);
        return this.size -= e ? 1 : 0, e;
      }
      function bs(n) {
        return wr(this, n).get(n);
      }
      function As(n) {
        return wr(this, n).has(n);
      }
      function Cs(n, e) {
        var t = wr(this, n), r = t.size;
        return t.set(n, e), this.size += t.size == r ? 0 : 1, this;
      }
      he.prototype.clear = ys, he.prototype.delete = xs, he.prototype.get = bs, he.prototype.has = As, he.prototype.set = Cs;
      function Ne(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.__data__ = new he(); ++e < t; )
          this.add(n[e]);
      }
      function Ss(n) {
        return this.__data__.set(n, an), this;
      }
      function Ts(n) {
        return this.__data__.has(n);
      }
      Ne.prototype.add = Ne.prototype.push = Ss, Ne.prototype.has = Ts;
      function te(n) {
        var e = this.__data__ = new ce(n);
        this.size = e.size;
      }
      function Ls() {
        this.__data__ = new ce(), this.size = 0;
      }
      function Is(n) {
        var e = this.__data__, t = e.delete(n);
        return this.size = e.size, t;
      }
      function Rs(n) {
        return this.__data__.get(n);
      }
      function Es(n) {
        return this.__data__.has(n);
      }
      function Ws(n, e) {
        var t = this.__data__;
        if (t instanceof ce) {
          var r = t.__data__;
          if (!_t || r.length < S - 1)
            return r.push([n, e]), this.size = ++t.size, this;
          t = this.__data__ = new he(r);
        }
        return t.set(n, e), this.size = t.size, this;
      }
      te.prototype.clear = Ls, te.prototype.delete = Is, te.prototype.get = Rs, te.prototype.has = Es, te.prototype.set = Ws;
      function pl(n, e) {
        var t = N(n), r = !t && He(n), i = !t && !r && Ee(n), f = !t && !r && !i && rt(n), a = t || r || i || f, s = a ? li(n.length, Ha) : [], h = s.length;
        for (var v in n)
          (e || V.call(n, v)) && !(a && (v == "length" || i && (v == "offset" || v == "parent") || f && (v == "buffer" || v == "byteLength" || v == "byteOffset") || _e(v, h))) && s.push(v);
        return s;
      }
      function ml(n) {
        var e = n.length;
        return e ? n[Ai(0, e - 1)] : u;
      }
      function Os(n, e) {
        return yr(On(n), Pe(e, 0, n.length));
      }
      function Bs(n) {
        return yr(On(n));
      }
      function di(n, e, t) {
        (t !== u && !re(n[e], t) || t === u && !(e in n)) && de(n, e, t);
      }
      function yt(n, e, t) {
        var r = n[e];
        (!(V.call(n, e) && re(r, t)) || t === u && !(e in n)) && de(n, e, t);
      }
      function fr(n, e) {
        for (var t = n.length; t--; )
          if (re(n[t][0], e))
            return t;
        return -1;
      }
      function $s(n, e, t, r) {
        return Te(n, function(i, f, a) {
          e(r, i, t(i), a);
        }), r;
      }
      function wl(n, e) {
        return n && oe(e, yn(e), n);
      }
      function Ms(n, e) {
        return n && oe(e, $n(e), n);
      }
      function de(n, e, t) {
        e == "__proto__" && er ? er(n, e, {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        }) : n[e] = t;
      }
      function gi(n, e) {
        for (var t = -1, r = e.length, i = d(r), f = n == null; ++t < r; )
          i[t] = f ? u : Zi(n, e[t]);
        return i;
      }
      function Pe(n, e, t) {
        return n === n && (t !== u && (n = n <= t ? n : t), e !== u && (n = n >= e ? n : e)), n;
      }
      function Zn(n, e, t, r, i, f) {
        var a, s = e & O, h = e & nn, v = e & J;
        if (t && (a = i ? t(n, r, i, f) : t(n)), a !== u)
          return a;
        if (!sn(n))
          return n;
        var _ = N(n);
        if (_) {
          if (a = Ac(n), !s)
            return On(n, a);
        } else {
          var p = In(n), C = p == Dt || p == xu;
          if (Ee(n))
            return zl(n, s);
          if (p == se || p == ze || C && !i) {
            if (a = h || C ? {} : af(n), !s)
              return h ? hc(n, Ms(a, n)) : cc(n, wl(a, n));
          } else {
            if (!un[p])
              return i ? n : {};
            a = Cc(n, p, s);
          }
        }
        f || (f = new te());
        var L = f.get(n);
        if (L)
          return L;
        f.set(n, a), Ff(n) ? n.forEach(function(W) {
          a.add(Zn(W, e, t, W, n, f));
        }) : Nf(n) && n.forEach(function(W, G) {
          a.set(G, Zn(W, e, t, G, n, f));
        });
        var E = v ? h ? $i : Bi : h ? $n : yn, U = _ ? u : E(n);
        return Xn(U || n, function(W, G) {
          U && (G = W, W = n[G]), yt(a, G, Zn(W, e, t, G, n, f));
        }), a;
      }
      function Ns(n) {
        var e = yn(n);
        return function(t) {
          return yl(t, n, e);
        };
      }
      function yl(n, e, t) {
        var r = t.length;
        if (n == null)
          return !r;
        for (n = rn(n); r--; ) {
          var i = t[r], f = e[i], a = n[i];
          if (a === u && !(i in n) || !f(a))
            return !1;
        }
        return !0;
      }
      function xl(n, e, t) {
        if (typeof n != "function")
          throw new qn(A);
        return Lt(function() {
          n.apply(u, t);
        }, e);
      }
      function xt(n, e, t, r) {
        var i = -1, f = Yt, a = !0, s = n.length, h = [], v = e.length;
        if (!s)
          return h;
        t && (e = on(e, Fn(t))), r ? (f = ni, a = !1) : e.length >= S && (f = gt, a = !1, e = new Ne(e));
        n:
          for (; ++i < s; ) {
            var _ = n[i], p = t == null ? _ : t(_);
            if (_ = r || _ !== 0 ? _ : 0, a && p === p) {
              for (var C = v; C--; )
                if (e[C] === p)
                  continue n;
              h.push(_);
            } else
              f(e, p, r) || h.push(_);
          }
        return h;
      }
      var Te = Zl(fe), bl = Zl(_i, !0);
      function Ps(n, e) {
        var t = !0;
        return Te(n, function(r, i, f) {
          return t = !!e(r, i, f), t;
        }), t;
      }
      function or(n, e, t) {
        for (var r = -1, i = n.length; ++r < i; ) {
          var f = n[r], a = e(f);
          if (a != null && (s === u ? a === a && !Un(a) : t(a, s)))
            var s = a, h = f;
        }
        return h;
      }
      function Fs(n, e, t, r) {
        var i = n.length;
        for (t = F(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === u || r > i ? i : F(r), r < 0 && (r += i), r = t > r ? 0 : Uf(r); t < r; )
          n[t++] = e;
        return n;
      }
      function Al(n, e) {
        var t = [];
        return Te(n, function(r, i, f) {
          e(r, i, f) && t.push(r);
        }), t;
      }
      function Cn(n, e, t, r, i) {
        var f = -1, a = n.length;
        for (t || (t = Tc), i || (i = []); ++f < a; ) {
          var s = n[f];
          e > 0 && t(s) ? e > 1 ? Cn(s, e - 1, t, r, i) : Ae(i, s) : r || (i[i.length] = s);
        }
        return i;
      }
      var vi = kl(), Cl = kl(!0);
      function fe(n, e) {
        return n && vi(n, e, yn);
      }
      function _i(n, e) {
        return n && Cl(n, e, yn);
      }
      function ar(n, e) {
        return be(e, function(t) {
          return pe(n[t]);
        });
      }
      function Fe(n, e) {
        e = Ie(e, n);
        for (var t = 0, r = e.length; n != null && t < r; )
          n = n[ae(e[t++])];
        return t && t == r ? n : u;
      }
      function Sl(n, e, t) {
        var r = e(n);
        return N(n) ? r : Ae(r, t(n));
      }
      function Rn(n) {
        return n == null ? n === u ? ho : so : $e && $e in rn(n) ? yc(n) : Bc(n);
      }
      function pi(n, e) {
        return n > e;
      }
      function Ds(n, e) {
        return n != null && V.call(n, e);
      }
      function Us(n, e) {
        return n != null && e in rn(n);
      }
      function Hs(n, e, t) {
        return n >= Ln(e, t) && n < wn(e, t);
      }
      function mi(n, e, t) {
        for (var r = t ? ni : Yt, i = n[0].length, f = n.length, a = f, s = d(f), h = 1 / 0, v = []; a--; ) {
          var _ = n[a];
          a && e && (_ = on(_, Fn(e))), h = Ln(_.length, h), s[a] = !t && (e || i >= 120 && _.length >= 120) ? new Ne(a && _) : u;
        }
        _ = n[0];
        var p = -1, C = s[0];
        n:
          for (; ++p < i && v.length < h; ) {
            var L = _[p], E = e ? e(L) : L;
            if (L = t || L !== 0 ? L : 0, !(C ? gt(C, E) : r(v, E, t))) {
              for (a = f; --a; ) {
                var U = s[a];
                if (!(U ? gt(U, E) : r(n[a], E, t)))
                  continue n;
              }
              C && C.push(E), v.push(L);
            }
          }
        return v;
      }
      function Gs(n, e, t, r) {
        return fe(n, function(i, f, a) {
          e(r, t(i), f, a);
        }), r;
      }
      function bt(n, e, t) {
        e = Ie(e, n), n = df(n, e);
        var r = n == null ? n : n[ae(Jn(e))];
        return r == null ? u : Pn(r, n, t);
      }
      function Tl(n) {
        return cn(n) && Rn(n) == ze;
      }
      function zs(n) {
        return cn(n) && Rn(n) == dt;
      }
      function Ys(n) {
        return cn(n) && Rn(n) == ot;
      }
      function At(n, e, t, r, i) {
        return n === e ? !0 : n == null || e == null || !cn(n) && !cn(e) ? n !== n && e !== e : Xs(n, e, t, r, At, i);
      }
      function Xs(n, e, t, r, i, f) {
        var a = N(n), s = N(e), h = a ? Pt : In(n), v = s ? Pt : In(e);
        h = h == ze ? se : h, v = v == ze ? se : v;
        var _ = h == se, p = v == se, C = h == v;
        if (C && Ee(n)) {
          if (!Ee(e))
            return !1;
          a = !0, _ = !1;
        }
        if (C && !_)
          return f || (f = new te()), a || rt(n) ? lf(n, e, t, r, i, f) : mc(n, e, h, t, r, i, f);
        if (!(t & ln)) {
          var L = _ && V.call(n, "__wrapped__"), E = p && V.call(e, "__wrapped__");
          if (L || E) {
            var U = L ? n.value() : n, W = E ? e.value() : e;
            return f || (f = new te()), i(U, W, t, r, f);
          }
        }
        return C ? (f || (f = new te()), wc(n, e, t, r, i, f)) : !1;
      }
      function qs(n) {
        return cn(n) && In(n) == jn;
      }
      function wi(n, e, t, r) {
        var i = t.length, f = i, a = !r;
        if (n == null)
          return !f;
        for (n = rn(n); i--; ) {
          var s = t[i];
          if (a && s[2] ? s[1] !== n[s[0]] : !(s[0] in n))
            return !1;
        }
        for (; ++i < f; ) {
          s = t[i];
          var h = s[0], v = n[h], _ = s[1];
          if (a && s[2]) {
            if (v === u && !(h in n))
              return !1;
          } else {
            var p = new te();
            if (r)
              var C = r(v, _, h, n, e, p);
            if (!(C === u ? At(_, v, ln | pn, r, p) : C))
              return !1;
          }
        }
        return !0;
      }
      function Ll(n) {
        if (!sn(n) || Ic(n))
          return !1;
        var e = pe(n) ? qa : No;
        return e.test(Ue(n));
      }
      function Ks(n) {
        return cn(n) && Rn(n) == st;
      }
      function Zs(n) {
        return cn(n) && In(n) == ne;
      }
      function ks(n) {
        return cn(n) && Tr(n.length) && !!fn[Rn(n)];
      }
      function Il(n) {
        return typeof n == "function" ? n : n == null ? Mn : typeof n == "object" ? N(n) ? Wl(n[0], n[1]) : El(n) : Qf(n);
      }
      function yi(n) {
        if (!Tt(n))
          return Va(n);
        var e = [];
        for (var t in rn(n))
          V.call(n, t) && t != "constructor" && e.push(t);
        return e;
      }
      function Js(n) {
        if (!sn(n))
          return Oc(n);
        var e = Tt(n), t = [];
        for (var r in n)
          r == "constructor" && (e || !V.call(n, r)) || t.push(r);
        return t;
      }
      function xi(n, e) {
        return n < e;
      }
      function Rl(n, e) {
        var t = -1, r = Bn(n) ? d(n.length) : [];
        return Te(n, function(i, f, a) {
          r[++t] = e(i, f, a);
        }), r;
      }
      function El(n) {
        var e = Ni(n);
        return e.length == 1 && e[0][2] ? cf(e[0][0], e[0][1]) : function(t) {
          return t === n || wi(t, n, e);
        };
      }
      function Wl(n, e) {
        return Fi(n) && sf(e) ? cf(ae(n), e) : function(t) {
          var r = Zi(t, n);
          return r === u && r === e ? ki(t, n) : At(e, r, ln | pn);
        };
      }
      function sr(n, e, t, r, i) {
        n !== e && vi(e, function(f, a) {
          if (i || (i = new te()), sn(f))
            Qs(n, e, a, t, sr, r, i);
          else {
            var s = r ? r(Ui(n, a), f, a + "", n, e, i) : u;
            s === u && (s = f), di(n, a, s);
          }
        }, $n);
      }
      function Qs(n, e, t, r, i, f, a) {
        var s = Ui(n, t), h = Ui(e, t), v = a.get(h);
        if (v) {
          di(n, t, v);
          return;
        }
        var _ = f ? f(s, h, t + "", n, e, a) : u, p = _ === u;
        if (p) {
          var C = N(h), L = !C && Ee(h), E = !C && !L && rt(h);
          _ = h, C || L || E ? N(s) ? _ = s : dn(s) ? _ = On(s) : L ? (p = !1, _ = zl(h, !0)) : E ? (p = !1, _ = Yl(h, !0)) : _ = [] : It(h) || He(h) ? (_ = s, He(s) ? _ = Hf(s) : (!sn(s) || pe(s)) && (_ = af(h))) : p = !1;
        }
        p && (a.set(h, _), i(_, h, r, f, a), a.delete(h)), di(n, t, _);
      }
      function Ol(n, e) {
        var t = n.length;
        if (!!t)
          return e += e < 0 ? t : 0, _e(e, t) ? n[e] : u;
      }
      function Bl(n, e, t) {
        e.length ? e = on(e, function(f) {
          return N(f) ? function(a) {
            return Fe(a, f.length === 1 ? f[0] : f);
          } : f;
        }) : e = [Mn];
        var r = -1;
        e = on(e, Fn(R()));
        var i = Rl(n, function(f, a, s) {
          var h = on(e, function(v) {
            return v(f);
          });
          return { criteria: h, index: ++r, value: f };
        });
        return Ca(i, function(f, a) {
          return sc(f, a, t);
        });
      }
      function Vs(n, e) {
        return $l(n, e, function(t, r) {
          return ki(n, r);
        });
      }
      function $l(n, e, t) {
        for (var r = -1, i = e.length, f = {}; ++r < i; ) {
          var a = e[r], s = Fe(n, a);
          t(s, a) && Ct(f, Ie(a, n), s);
        }
        return f;
      }
      function js(n) {
        return function(e) {
          return Fe(e, n);
        };
      }
      function bi(n, e, t, r) {
        var i = r ? Aa : qe, f = -1, a = e.length, s = n;
        for (n === e && (e = On(e)), t && (s = on(n, Fn(t))); ++f < a; )
          for (var h = 0, v = e[f], _ = t ? t(v) : v; (h = i(s, _, h, r)) > -1; )
            s !== n && nr.call(s, h, 1), nr.call(n, h, 1);
        return n;
      }
      function Ml(n, e) {
        for (var t = n ? e.length : 0, r = t - 1; t--; ) {
          var i = e[t];
          if (t == r || i !== f) {
            var f = i;
            _e(i) ? nr.call(n, i, 1) : Ti(n, i);
          }
        }
        return n;
      }
      function Ai(n, e) {
        return n + rr(vl() * (e - n + 1));
      }
      function nc(n, e, t, r) {
        for (var i = -1, f = wn(tr((e - n) / (t || 1)), 0), a = d(f); f--; )
          a[r ? f : ++i] = n, n += t;
        return a;
      }
      function Ci(n, e) {
        var t = "";
        if (!n || e < 1 || e > xe)
          return t;
        do
          e % 2 && (t += n), e = rr(e / 2), e && (n += n);
        while (e);
        return t;
      }
      function H(n, e) {
        return Hi(hf(n, e, Mn), n + "");
      }
      function ec(n) {
        return ml(it(n));
      }
      function tc(n, e) {
        var t = it(n);
        return yr(t, Pe(e, 0, t.length));
      }
      function Ct(n, e, t, r) {
        if (!sn(n))
          return n;
        e = Ie(e, n);
        for (var i = -1, f = e.length, a = f - 1, s = n; s != null && ++i < f; ) {
          var h = ae(e[i]), v = t;
          if (h === "__proto__" || h === "constructor" || h === "prototype")
            return n;
          if (i != a) {
            var _ = s[h];
            v = r ? r(_, h, s) : u, v === u && (v = sn(_) ? _ : _e(e[i + 1]) ? [] : {});
          }
          yt(s, h, v), s = s[h];
        }
        return n;
      }
      var Nl = ir ? function(n, e) {
        return ir.set(n, e), n;
      } : Mn, rc = er ? function(n, e) {
        return er(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Qi(e),
          writable: !0
        });
      } : Mn;
      function ic(n) {
        return yr(it(n));
      }
      function kn(n, e, t) {
        var r = -1, i = n.length;
        e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
        for (var f = d(i); ++r < i; )
          f[r] = n[r + e];
        return f;
      }
      function uc(n, e) {
        var t;
        return Te(n, function(r, i, f) {
          return t = e(r, i, f), !t;
        }), !!t;
      }
      function cr(n, e, t) {
        var r = 0, i = n == null ? r : n.length;
        if (typeof e == "number" && e === e && i <= lo) {
          for (; r < i; ) {
            var f = r + i >>> 1, a = n[f];
            a !== null && !Un(a) && (t ? a <= e : a < e) ? r = f + 1 : i = f;
          }
          return i;
        }
        return Si(n, e, Mn, t);
      }
      function Si(n, e, t, r) {
        var i = 0, f = n == null ? 0 : n.length;
        if (f === 0)
          return 0;
        e = t(e);
        for (var a = e !== e, s = e === null, h = Un(e), v = e === u; i < f; ) {
          var _ = rr((i + f) / 2), p = t(n[_]), C = p !== u, L = p === null, E = p === p, U = Un(p);
          if (a)
            var W = r || E;
          else
            v ? W = E && (r || C) : s ? W = E && C && (r || !L) : h ? W = E && C && !L && (r || !U) : L || U ? W = !1 : W = r ? p <= e : p < e;
          W ? i = _ + 1 : f = _;
        }
        return Ln(f, uo);
      }
      function Pl(n, e) {
        for (var t = -1, r = n.length, i = 0, f = []; ++t < r; ) {
          var a = n[t], s = e ? e(a) : a;
          if (!t || !re(s, h)) {
            var h = s;
            f[i++] = a === 0 ? 0 : a;
          }
        }
        return f;
      }
      function Fl(n) {
        return typeof n == "number" ? n : Un(n) ? Nt : +n;
      }
      function Dn(n) {
        if (typeof n == "string")
          return n;
        if (N(n))
          return on(n, Dn) + "";
        if (Un(n))
          return _l ? _l.call(n) : "";
        var e = n + "";
        return e == "0" && 1 / n == -Oe ? "-0" : e;
      }
      function Le(n, e, t) {
        var r = -1, i = Yt, f = n.length, a = !0, s = [], h = s;
        if (t)
          a = !1, i = ni;
        else if (f >= S) {
          var v = e ? null : _c(n);
          if (v)
            return qt(v);
          a = !1, i = gt, h = new Ne();
        } else
          h = e ? [] : s;
        n:
          for (; ++r < f; ) {
            var _ = n[r], p = e ? e(_) : _;
            if (_ = t || _ !== 0 ? _ : 0, a && p === p) {
              for (var C = h.length; C--; )
                if (h[C] === p)
                  continue n;
              e && h.push(p), s.push(_);
            } else
              i(h, p, t) || (h !== s && h.push(p), s.push(_));
          }
        return s;
      }
      function Ti(n, e) {
        return e = Ie(e, n), n = df(n, e), n == null || delete n[ae(Jn(e))];
      }
      function Dl(n, e, t, r) {
        return Ct(n, e, t(Fe(n, e)), r);
      }
      function hr(n, e, t, r) {
        for (var i = n.length, f = r ? i : -1; (r ? f-- : ++f < i) && e(n[f], f, n); )
          ;
        return t ? kn(n, r ? 0 : f, r ? f + 1 : i) : kn(n, r ? f + 1 : 0, r ? i : f);
      }
      function Ul(n, e) {
        var t = n;
        return t instanceof z && (t = t.value()), ei(e, function(r, i) {
          return i.func.apply(i.thisArg, Ae([r], i.args));
        }, t);
      }
      function Li(n, e, t) {
        var r = n.length;
        if (r < 2)
          return r ? Le(n[0]) : [];
        for (var i = -1, f = d(r); ++i < r; )
          for (var a = n[i], s = -1; ++s < r; )
            s != i && (f[i] = xt(f[i] || a, n[s], e, t));
        return Le(Cn(f, 1), e, t);
      }
      function Hl(n, e, t) {
        for (var r = -1, i = n.length, f = e.length, a = {}; ++r < i; ) {
          var s = r < f ? e[r] : u;
          t(a, n[r], s);
        }
        return a;
      }
      function Ii(n) {
        return dn(n) ? n : [];
      }
      function Ri(n) {
        return typeof n == "function" ? n : Mn;
      }
      function Ie(n, e) {
        return N(n) ? n : Fi(n, e) ? [n] : pf(Q(n));
      }
      var lc = H;
      function Re(n, e, t) {
        var r = n.length;
        return t = t === u ? r : t, !e && t >= r ? n : kn(n, e, t);
      }
      var Gl = Ka || function(n) {
        return An.clearTimeout(n);
      };
      function zl(n, e) {
        if (e)
          return n.slice();
        var t = n.length, r = sl ? sl(t) : new n.constructor(t);
        return n.copy(r), r;
      }
      function Ei(n) {
        var e = new n.constructor(n.byteLength);
        return new Vt(e).set(new Vt(n)), e;
      }
      function fc(n, e) {
        var t = e ? Ei(n.buffer) : n.buffer;
        return new n.constructor(t, n.byteOffset, n.byteLength);
      }
      function oc(n) {
        var e = new n.constructor(n.source, Tu.exec(n));
        return e.lastIndex = n.lastIndex, e;
      }
      function ac(n) {
        return wt ? rn(wt.call(n)) : {};
      }
      function Yl(n, e) {
        var t = e ? Ei(n.buffer) : n.buffer;
        return new n.constructor(t, n.byteOffset, n.length);
      }
      function Xl(n, e) {
        if (n !== e) {
          var t = n !== u, r = n === null, i = n === n, f = Un(n), a = e !== u, s = e === null, h = e === e, v = Un(e);
          if (!s && !v && !f && n > e || f && a && h && !s && !v || r && a && h || !t && h || !i)
            return 1;
          if (!r && !f && !v && n < e || v && t && i && !r && !f || s && t && i || !a && i || !h)
            return -1;
        }
        return 0;
      }
      function sc(n, e, t) {
        for (var r = -1, i = n.criteria, f = e.criteria, a = i.length, s = t.length; ++r < a; ) {
          var h = Xl(i[r], f[r]);
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
        for (var i = -1, f = n.length, a = t.length, s = -1, h = e.length, v = wn(f - a, 0), _ = d(h + v), p = !r; ++s < h; )
          _[s] = e[s];
        for (; ++i < a; )
          (p || i < f) && (_[t[i]] = n[i]);
        for (; v--; )
          _[s++] = n[i++];
        return _;
      }
      function Kl(n, e, t, r) {
        for (var i = -1, f = n.length, a = -1, s = t.length, h = -1, v = e.length, _ = wn(f - s, 0), p = d(_ + v), C = !r; ++i < _; )
          p[i] = n[i];
        for (var L = i; ++h < v; )
          p[L + h] = e[h];
        for (; ++a < s; )
          (C || i < f) && (p[L + t[a]] = n[i++]);
        return p;
      }
      function On(n, e) {
        var t = -1, r = n.length;
        for (e || (e = d(r)); ++t < r; )
          e[t] = n[t];
        return e;
      }
      function oe(n, e, t, r) {
        var i = !t;
        t || (t = {});
        for (var f = -1, a = e.length; ++f < a; ) {
          var s = e[f], h = r ? r(t[s], n[s], s, t, n) : u;
          h === u && (h = n[s]), i ? de(t, s, h) : yt(t, s, h);
        }
        return t;
      }
      function cc(n, e) {
        return oe(n, Pi(n), e);
      }
      function hc(n, e) {
        return oe(n, ff(n), e);
      }
      function dr(n, e) {
        return function(t, r) {
          var i = N(t) ? pa : $s, f = e ? e() : {};
          return i(t, n, R(r, 2), f);
        };
      }
      function nt(n) {
        return H(function(e, t) {
          var r = -1, i = t.length, f = i > 1 ? t[i - 1] : u, a = i > 2 ? t[2] : u;
          for (f = n.length > 3 && typeof f == "function" ? (i--, f) : u, a && En(t[0], t[1], a) && (f = i < 3 ? u : f, i = 1), e = rn(e); ++r < i; ) {
            var s = t[r];
            s && n(e, s, r, f);
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
          for (var i = t.length, f = e ? i : -1, a = rn(t); (e ? f-- : ++f < i) && r(a[f], f, a) !== !1; )
            ;
          return t;
        };
      }
      function kl(n) {
        return function(e, t, r) {
          for (var i = -1, f = rn(e), a = r(e), s = a.length; s--; ) {
            var h = a[n ? s : ++i];
            if (t(f[h], h, f) === !1)
              break;
          }
          return e;
        };
      }
      function dc(n, e, t) {
        var r = e & tn, i = St(n);
        function f() {
          var a = this && this !== An && this instanceof f ? i : n;
          return a.apply(r ? t : this, arguments);
        }
        return f;
      }
      function Jl(n) {
        return function(e) {
          e = Q(e);
          var t = Ke(e) ? ee(e) : u, r = t ? t[0] : e.charAt(0), i = t ? Re(t, 1).join("") : e.slice(1);
          return r[n]() + i;
        };
      }
      function et(n) {
        return function(e) {
          return ei(kf(Zf(e).replace(ra, "")), n, "");
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
      function gc(n, e, t) {
        var r = St(n);
        function i() {
          for (var f = arguments.length, a = d(f), s = f, h = tt(i); s--; )
            a[s] = arguments[s];
          var v = f < 3 && a[0] !== h && a[f - 1] !== h ? [] : Ce(a, h);
          if (f -= v.length, f < t)
            return ef(n, e, gr, i.placeholder, u, a, v, u, u, t - f);
          var _ = this && this !== An && this instanceof i ? r : n;
          return Pn(_, this, a);
        }
        return i;
      }
      function Ql(n) {
        return function(e, t, r) {
          var i = rn(e);
          if (!Bn(e)) {
            var f = R(t, 3);
            e = yn(e), t = function(s) {
              return f(i[s], s, i);
            };
          }
          var a = n(e, t, r);
          return a > -1 ? i[f ? e[a] : a] : u;
        };
      }
      function Vl(n) {
        return ve(function(e) {
          var t = e.length, r = t, i = Kn.prototype.thru;
          for (n && e.reverse(); r--; ) {
            var f = e[r];
            if (typeof f != "function")
              throw new qn(A);
            if (i && !a && mr(f) == "wrapper")
              var a = new Kn([], !0);
          }
          for (r = a ? r : t; ++r < t; ) {
            f = e[r];
            var s = mr(f), h = s == "wrapper" ? Mi(f) : u;
            h && Di(h[0]) && h[1] == (Z | B | w | Tn) && !h[4].length && h[9] == 1 ? a = a[mr(h[0])].apply(a, h[3]) : a = f.length == 1 && Di(f) ? a[s]() : a.thru(f);
          }
          return function() {
            var v = arguments, _ = v[0];
            if (a && v.length == 1 && N(_))
              return a.plant(_).value();
            for (var p = 0, C = t ? e[p].apply(this, v) : _; ++p < t; )
              C = e[p].call(this, C);
            return C;
          };
        });
      }
      function gr(n, e, t, r, i, f, a, s, h, v) {
        var _ = e & Z, p = e & tn, C = e & bn, L = e & (B | q), E = e & Nn, U = C ? u : St(n);
        function W() {
          for (var G = arguments.length, Y = d(G), Hn = G; Hn--; )
            Y[Hn] = arguments[Hn];
          if (L)
            var Wn = tt(W), Gn = Ta(Y, Wn);
          if (r && (Y = ql(Y, r, i, L)), f && (Y = Kl(Y, f, a, L)), G -= Gn, L && G < v) {
            var gn = Ce(Y, Wn);
            return ef(n, e, gr, W.placeholder, t, Y, gn, s, h, v - G);
          }
          var ie = p ? t : this, we = C ? ie[n] : n;
          return G = Y.length, s ? Y = $c(Y, s) : E && G > 1 && Y.reverse(), _ && h < G && (Y.length = h), this && this !== An && this instanceof W && (we = U || St(we)), we.apply(ie, Y);
        }
        return W;
      }
      function jl(n, e) {
        return function(t, r) {
          return Gs(t, n, e(r), {});
        };
      }
      function vr(n, e) {
        return function(t, r) {
          var i;
          if (t === u && r === u)
            return e;
          if (t !== u && (i = t), r !== u) {
            if (i === u)
              return r;
            typeof t == "string" || typeof r == "string" ? (t = Dn(t), r = Dn(r)) : (t = Fl(t), r = Fl(r)), i = n(t, r);
          }
          return i;
        };
      }
      function Wi(n) {
        return ve(function(e) {
          return e = on(e, Fn(R())), H(function(t) {
            var r = this;
            return n(e, function(i) {
              return Pn(i, r, t);
            });
          });
        });
      }
      function _r(n, e) {
        e = e === u ? " " : Dn(e);
        var t = e.length;
        if (t < 2)
          return t ? Ci(e, n) : e;
        var r = Ci(e, tr(n / Ze(e)));
        return Ke(e) ? Re(ee(r), 0, n).join("") : r.slice(0, n);
      }
      function vc(n, e, t, r) {
        var i = e & tn, f = St(n);
        function a() {
          for (var s = -1, h = arguments.length, v = -1, _ = r.length, p = d(_ + h), C = this && this !== An && this instanceof a ? f : n; ++v < _; )
            p[v] = r[v];
          for (; h--; )
            p[v++] = arguments[++s];
          return Pn(C, i ? t : this, p);
        }
        return a;
      }
      function nf(n) {
        return function(e, t, r) {
          return r && typeof r != "number" && En(e, t, r) && (t = r = u), e = me(e), t === u ? (t = e, e = 0) : t = me(t), r = r === u ? e < t ? 1 : -1 : me(r), nc(e, t, r, n);
        };
      }
      function pr(n) {
        return function(e, t) {
          return typeof e == "string" && typeof t == "string" || (e = Qn(e), t = Qn(t)), n(e, t);
        };
      }
      function ef(n, e, t, r, i, f, a, s, h, v) {
        var _ = e & B, p = _ ? a : u, C = _ ? u : a, L = _ ? f : u, E = _ ? u : f;
        e |= _ ? w : D, e &= ~(_ ? D : w), e & zn || (e &= ~(tn | bn));
        var U = [
          n,
          e,
          i,
          L,
          p,
          E,
          C,
          s,
          h,
          v
        ], W = t.apply(u, U);
        return Di(n) && gf(W, U), W.placeholder = r, vf(W, n, e);
      }
      function Oi(n) {
        var e = mn[n];
        return function(t, r) {
          if (t = Qn(t), r = r == null ? 0 : Ln(F(r), 292), r && gl(t)) {
            var i = (Q(t) + "e").split("e"), f = e(i[0] + "e" + (+i[1] + r));
            return i = (Q(f) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return e(t);
        };
      }
      var _c = Qe && 1 / qt(new Qe([, -0]))[1] == Oe ? function(n) {
        return new Qe(n);
      } : nu;
      function tf(n) {
        return function(e) {
          var t = In(e);
          return t == jn ? oi(e) : t == ne ? Ba(e) : Sa(e, n(e));
        };
      }
      function ge(n, e, t, r, i, f, a, s) {
        var h = e & bn;
        if (!h && typeof n != "function")
          throw new qn(A);
        var v = r ? r.length : 0;
        if (v || (e &= ~(w | D), r = i = u), a = a === u ? a : wn(F(a), 0), s = s === u ? s : F(s), v -= i ? i.length : 0, e & D) {
          var _ = r, p = i;
          r = i = u;
        }
        var C = h ? u : Mi(n), L = [
          n,
          e,
          t,
          r,
          i,
          _,
          p,
          f,
          a,
          s
        ];
        if (C && Wc(L, C), n = L[0], e = L[1], t = L[2], r = L[3], i = L[4], s = L[9] = L[9] === u ? h ? 0 : n.length : wn(L[9] - v, 0), !s && e & (B | q) && (e &= ~(B | q)), !e || e == tn)
          var E = dc(n, e, t);
        else
          e == B || e == q ? E = gc(n, e, s) : (e == w || e == (tn | w)) && !i.length ? E = vc(n, e, t, r) : E = gr.apply(u, L);
        var U = C ? Nl : gf;
        return vf(U(E, L), n, e);
      }
      function rf(n, e, t, r) {
        return n === u || re(n, Je[t]) && !V.call(r, t) ? e : n;
      }
      function uf(n, e, t, r, i, f) {
        return sn(n) && sn(e) && (f.set(e, n), sr(n, e, u, uf, f), f.delete(e)), n;
      }
      function pc(n) {
        return It(n) ? u : n;
      }
      function lf(n, e, t, r, i, f) {
        var a = t & ln, s = n.length, h = e.length;
        if (s != h && !(a && h > s))
          return !1;
        var v = f.get(n), _ = f.get(e);
        if (v && _)
          return v == e && _ == n;
        var p = -1, C = !0, L = t & pn ? new Ne() : u;
        for (f.set(n, e), f.set(e, n); ++p < s; ) {
          var E = n[p], U = e[p];
          if (r)
            var W = a ? r(U, E, p, e, n, f) : r(E, U, p, n, e, f);
          if (W !== u) {
            if (W)
              continue;
            C = !1;
            break;
          }
          if (L) {
            if (!ti(e, function(G, Y) {
              if (!gt(L, Y) && (E === G || i(E, G, t, r, f)))
                return L.push(Y);
            })) {
              C = !1;
              break;
            }
          } else if (!(E === U || i(E, U, t, r, f))) {
            C = !1;
            break;
          }
        }
        return f.delete(n), f.delete(e), C;
      }
      function mc(n, e, t, r, i, f, a) {
        switch (t) {
          case Ye:
            if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
              return !1;
            n = n.buffer, e = e.buffer;
          case dt:
            return !(n.byteLength != e.byteLength || !f(new Vt(n), new Vt(e)));
          case ft:
          case ot:
          case at:
            return re(+n, +e);
          case Ft:
            return n.name == e.name && n.message == e.message;
          case st:
          case ct:
            return n == e + "";
          case jn:
            var s = oi;
          case ne:
            var h = r & ln;
            if (s || (s = qt), n.size != e.size && !h)
              return !1;
            var v = a.get(n);
            if (v)
              return v == e;
            r |= pn, a.set(n, e);
            var _ = lf(s(n), s(e), r, i, f, a);
            return a.delete(n), _;
          case Ut:
            if (wt)
              return wt.call(n) == wt.call(e);
        }
        return !1;
      }
      function wc(n, e, t, r, i, f) {
        var a = t & ln, s = Bi(n), h = s.length, v = Bi(e), _ = v.length;
        if (h != _ && !a)
          return !1;
        for (var p = h; p--; ) {
          var C = s[p];
          if (!(a ? C in e : V.call(e, C)))
            return !1;
        }
        var L = f.get(n), E = f.get(e);
        if (L && E)
          return L == e && E == n;
        var U = !0;
        f.set(n, e), f.set(e, n);
        for (var W = a; ++p < h; ) {
          C = s[p];
          var G = n[C], Y = e[C];
          if (r)
            var Hn = a ? r(Y, G, C, e, n, f) : r(G, Y, C, n, e, f);
          if (!(Hn === u ? G === Y || i(G, Y, t, r, f) : Hn)) {
            U = !1;
            break;
          }
          W || (W = C == "constructor");
        }
        if (U && !W) {
          var Wn = n.constructor, Gn = e.constructor;
          Wn != Gn && "constructor" in n && "constructor" in e && !(typeof Wn == "function" && Wn instanceof Wn && typeof Gn == "function" && Gn instanceof Gn) && (U = !1);
        }
        return f.delete(n), f.delete(e), U;
      }
      function ve(n) {
        return Hi(hf(n, u, xf), n + "");
      }
      function Bi(n) {
        return Sl(n, yn, Pi);
      }
      function $i(n) {
        return Sl(n, $n, ff);
      }
      var Mi = ir ? function(n) {
        return ir.get(n);
      } : nu;
      function mr(n) {
        for (var e = n.name + "", t = Ve[e], r = V.call(Ve, e) ? t.length : 0; r--; ) {
          var i = t[r], f = i.func;
          if (f == null || f == n)
            return i.name;
        }
        return e;
      }
      function tt(n) {
        var e = V.call(l, "placeholder") ? l : n;
        return e.placeholder;
      }
      function R() {
        var n = l.iteratee || Vi;
        return n = n === Vi ? Il : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function wr(n, e) {
        var t = n.__data__;
        return Lc(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
      }
      function Ni(n) {
        for (var e = yn(n), t = e.length; t--; ) {
          var r = e[t], i = n[r];
          e[t] = [r, i, sf(i)];
        }
        return e;
      }
      function De(n, e) {
        var t = Ea(n, e);
        return Ll(t) ? t : u;
      }
      function yc(n) {
        var e = V.call(n, $e), t = n[$e];
        try {
          n[$e] = u;
          var r = !0;
        } catch {
        }
        var i = Jt.call(n);
        return r && (e ? n[$e] = t : delete n[$e]), i;
      }
      var Pi = si ? function(n) {
        return n == null ? [] : (n = rn(n), be(si(n), function(e) {
          return hl.call(n, e);
        }));
      } : eu, ff = si ? function(n) {
        for (var e = []; n; )
          Ae(e, Pi(n)), n = jt(n);
        return e;
      } : eu, In = Rn;
      (ci && In(new ci(new ArrayBuffer(1))) != Ye || _t && In(new _t()) != jn || hi && In(hi.resolve()) != bu || Qe && In(new Qe()) != ne || pt && In(new pt()) != ht) && (In = function(n) {
        var e = Rn(n), t = e == se ? n.constructor : u, r = t ? Ue(t) : "";
        if (r)
          switch (r) {
            case ts:
              return Ye;
            case rs:
              return jn;
            case is:
              return bu;
            case us:
              return ne;
            case ls:
              return ht;
          }
        return e;
      });
      function xc(n, e, t) {
        for (var r = -1, i = t.length; ++r < i; ) {
          var f = t[r], a = f.size;
          switch (f.type) {
            case "drop":
              n += a;
              break;
            case "dropRight":
              e -= a;
              break;
            case "take":
              e = Ln(e, n + a);
              break;
            case "takeRight":
              n = wn(n, e - a);
              break;
          }
        }
        return { start: n, end: e };
      }
      function bc(n) {
        var e = n.match(Io);
        return e ? e[1].split(Ro) : [];
      }
      function of(n, e, t) {
        e = Ie(e, n);
        for (var r = -1, i = e.length, f = !1; ++r < i; ) {
          var a = ae(e[r]);
          if (!(f = n != null && t(n, a)))
            break;
          n = n[a];
        }
        return f || ++r != i ? f : (i = n == null ? 0 : n.length, !!i && Tr(i) && _e(a, i) && (N(n) || He(n)));
      }
      function Ac(n) {
        var e = n.length, t = new n.constructor(e);
        return e && typeof n[0] == "string" && V.call(n, "index") && (t.index = n.index, t.input = n.input), t;
      }
      function af(n) {
        return typeof n.constructor == "function" && !Tt(n) ? je(jt(n)) : {};
      }
      function Cc(n, e, t) {
        var r = n.constructor;
        switch (e) {
          case dt:
            return Ei(n);
          case ft:
          case ot:
            return new r(+n);
          case Ye:
            return fc(n, t);
          case Nr:
          case Pr:
          case Fr:
          case Dr:
          case Ur:
          case Hr:
          case Gr:
          case zr:
          case Yr:
            return Yl(n, t);
          case jn:
            return new r();
          case at:
          case ct:
            return new r(n);
          case st:
            return oc(n);
          case ne:
            return new r();
          case Ut:
            return ac(n);
        }
      }
      function Sc(n, e) {
        var t = e.length;
        if (!t)
          return n;
        var r = t - 1;
        return e[r] = (t > 1 ? "& " : "") + e[r], e = e.join(t > 2 ? ", " : " "), n.replace(Lo, `{
/* [wrapped with ` + e + `] */
`);
      }
      function Tc(n) {
        return N(n) || He(n) || !!(dl && n && n[dl]);
      }
      function _e(n, e) {
        var t = typeof n;
        return e = e == null ? xe : e, !!e && (t == "number" || t != "symbol" && Fo.test(n)) && n > -1 && n % 1 == 0 && n < e;
      }
      function En(n, e, t) {
        if (!sn(t))
          return !1;
        var r = typeof e;
        return (r == "number" ? Bn(t) && _e(e, t.length) : r == "string" && e in t) ? re(t[e], n) : !1;
      }
      function Fi(n, e) {
        if (N(n))
          return !1;
        var t = typeof n;
        return t == "number" || t == "symbol" || t == "boolean" || n == null || Un(n) ? !0 : Ao.test(n) || !bo.test(n) || e != null && n in rn(e);
      }
      function Lc(n) {
        var e = typeof n;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
      }
      function Di(n) {
        var e = mr(n), t = l[e];
        if (typeof t != "function" || !(e in z.prototype))
          return !1;
        if (n === t)
          return !0;
        var r = Mi(t);
        return !!r && n === r[0];
      }
      function Ic(n) {
        return !!al && al in n;
      }
      var Rc = Zt ? pe : tu;
      function Tt(n) {
        var e = n && n.constructor, t = typeof e == "function" && e.prototype || Je;
        return n === t;
      }
      function sf(n) {
        return n === n && !sn(n);
      }
      function cf(n, e) {
        return function(t) {
          return t == null ? !1 : t[n] === e && (e !== u || n in rn(t));
        };
      }
      function Ec(n) {
        var e = Cr(n, function(r) {
          return t.size === P && t.clear(), r;
        }), t = e.cache;
        return e;
      }
      function Wc(n, e) {
        var t = n[1], r = e[1], i = t | r, f = i < (tn | bn | Z), a = r == Z && t == B || r == Z && t == Tn && n[7].length <= e[8] || r == (Z | Tn) && e[7].length <= e[8] && t == B;
        if (!(f || a))
          return n;
        r & tn && (n[2] = e[2], i |= t & tn ? 0 : zn);
        var s = e[3];
        if (s) {
          var h = n[3];
          n[3] = h ? ql(h, s, e[4]) : s, n[4] = h ? Ce(n[3], y) : e[4];
        }
        return s = e[5], s && (h = n[5], n[5] = h ? Kl(h, s, e[6]) : s, n[6] = h ? Ce(n[5], y) : e[6]), s = e[7], s && (n[7] = s), r & Z && (n[8] = n[8] == null ? e[8] : Ln(n[8], e[8])), n[9] == null && (n[9] = e[9]), n[0] = e[0], n[1] = i, n;
      }
      function Oc(n) {
        var e = [];
        if (n != null)
          for (var t in rn(n))
            e.push(t);
        return e;
      }
      function Bc(n) {
        return Jt.call(n);
      }
      function hf(n, e, t) {
        return e = wn(e === u ? n.length - 1 : e, 0), function() {
          for (var r = arguments, i = -1, f = wn(r.length - e, 0), a = d(f); ++i < f; )
            a[i] = r[e + i];
          i = -1;
          for (var s = d(e + 1); ++i < e; )
            s[i] = r[i];
          return s[e] = t(a), Pn(n, this, s);
        };
      }
      function df(n, e) {
        return e.length < 2 ? n : Fe(n, kn(e, 0, -1));
      }
      function $c(n, e) {
        for (var t = n.length, r = Ln(e.length, t), i = On(n); r--; ) {
          var f = e[r];
          n[r] = _e(f, t) ? i[f] : u;
        }
        return n;
      }
      function Ui(n, e) {
        if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
          return n[e];
      }
      var gf = _f(Nl), Lt = ka || function(n, e) {
        return An.setTimeout(n, e);
      }, Hi = _f(rc);
      function vf(n, e, t) {
        var r = e + "";
        return Hi(n, Sc(r, Mc(bc(r), t)));
      }
      function _f(n) {
        var e = 0, t = 0;
        return function() {
          var r = ja(), i = Mt - (r - t);
          if (t = r, i > 0) {
            if (++e >= $t)
              return arguments[0];
          } else
            e = 0;
          return n.apply(u, arguments);
        };
      }
      function yr(n, e) {
        var t = -1, r = n.length, i = r - 1;
        for (e = e === u ? r : e; ++t < e; ) {
          var f = Ai(t, i), a = n[f];
          n[f] = n[t], n[t] = a;
        }
        return n.length = e, n;
      }
      var pf = Ec(function(n) {
        var e = [];
        return n.charCodeAt(0) === 46 && e.push(""), n.replace(Co, function(t, r, i, f) {
          e.push(i ? f.replace(Oo, "$1") : r || t);
        }), e;
      });
      function ae(n) {
        if (typeof n == "string" || Un(n))
          return n;
        var e = n + "";
        return e == "0" && 1 / n == -Oe ? "-0" : e;
      }
      function Ue(n) {
        if (n != null) {
          try {
            return kt.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Mc(n, e) {
        return Xn(fo, function(t) {
          var r = "_." + t[0];
          e & t[1] && !Yt(n, r) && n.push(r);
        }), n.sort();
      }
      function mf(n) {
        if (n instanceof z)
          return n.clone();
        var e = new Kn(n.__wrapped__, n.__chain__);
        return e.__actions__ = On(n.__actions__), e.__index__ = n.__index__, e.__values__ = n.__values__, e;
      }
      function Nc(n, e, t) {
        (t ? En(n, e, t) : e === u) ? e = 1 : e = wn(F(e), 0);
        var r = n == null ? 0 : n.length;
        if (!r || e < 1)
          return [];
        for (var i = 0, f = 0, a = d(tr(r / e)); i < r; )
          a[f++] = kn(n, i, i += e);
        return a;
      }
      function Pc(n) {
        for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
          var f = n[e];
          f && (i[r++] = f);
        }
        return i;
      }
      function Fc() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var e = d(n - 1), t = arguments[0], r = n; r--; )
          e[r - 1] = arguments[r];
        return Ae(N(t) ? On(t) : [t], Cn(e, 1));
      }
      var Dc = H(function(n, e) {
        return dn(n) ? xt(n, Cn(e, 1, dn, !0)) : [];
      }), Uc = H(function(n, e) {
        var t = Jn(e);
        return dn(t) && (t = u), dn(n) ? xt(n, Cn(e, 1, dn, !0), R(t, 2)) : [];
      }), Hc = H(function(n, e) {
        var t = Jn(e);
        return dn(t) && (t = u), dn(n) ? xt(n, Cn(e, 1, dn, !0), u, t) : [];
      });
      function Gc(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === u ? 1 : F(e), kn(n, e < 0 ? 0 : e, r)) : [];
      }
      function zc(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === u ? 1 : F(e), e = r - e, kn(n, 0, e < 0 ? 0 : e)) : [];
      }
      function Yc(n, e) {
        return n && n.length ? hr(n, R(e, 3), !0, !0) : [];
      }
      function Xc(n, e) {
        return n && n.length ? hr(n, R(e, 3), !0) : [];
      }
      function qc(n, e, t, r) {
        var i = n == null ? 0 : n.length;
        return i ? (t && typeof t != "number" && En(n, e, t) && (t = 0, r = i), Fs(n, e, t, r)) : [];
      }
      function wf(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : F(t);
        return i < 0 && (i = wn(r + i, 0)), Xt(n, R(e, 3), i);
      }
      function yf(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r - 1;
        return t !== u && (i = F(t), i = t < 0 ? wn(r + i, 0) : Ln(i, r - 1)), Xt(n, R(e, 3), i, !0);
      }
      function xf(n) {
        var e = n == null ? 0 : n.length;
        return e ? Cn(n, 1) : [];
      }
      function Kc(n) {
        var e = n == null ? 0 : n.length;
        return e ? Cn(n, Oe) : [];
      }
      function Zc(n, e) {
        var t = n == null ? 0 : n.length;
        return t ? (e = e === u ? 1 : F(e), Cn(n, e)) : [];
      }
      function kc(n) {
        for (var e = -1, t = n == null ? 0 : n.length, r = {}; ++e < t; ) {
          var i = n[e];
          r[i[0]] = i[1];
        }
        return r;
      }
      function bf(n) {
        return n && n.length ? n[0] : u;
      }
      function Jc(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : F(t);
        return i < 0 && (i = wn(r + i, 0)), qe(n, e, i);
      }
      function Qc(n) {
        var e = n == null ? 0 : n.length;
        return e ? kn(n, 0, -1) : [];
      }
      var Vc = H(function(n) {
        var e = on(n, Ii);
        return e.length && e[0] === n[0] ? mi(e) : [];
      }), jc = H(function(n) {
        var e = Jn(n), t = on(n, Ii);
        return e === Jn(t) ? e = u : t.pop(), t.length && t[0] === n[0] ? mi(t, R(e, 2)) : [];
      }), nh = H(function(n) {
        var e = Jn(n), t = on(n, Ii);
        return e = typeof e == "function" ? e : u, e && t.pop(), t.length && t[0] === n[0] ? mi(t, u, e) : [];
      });
      function eh(n, e) {
        return n == null ? "" : Qa.call(n, e);
      }
      function Jn(n) {
        var e = n == null ? 0 : n.length;
        return e ? n[e - 1] : u;
      }
      function th(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r;
        return t !== u && (i = F(t), i = i < 0 ? wn(r + i, 0) : Ln(i, r - 1)), e === e ? Ma(n, e, i) : Xt(n, el, i, !0);
      }
      function rh(n, e) {
        return n && n.length ? Ol(n, F(e)) : u;
      }
      var ih = H(Af);
      function Af(n, e) {
        return n && n.length && e && e.length ? bi(n, e) : n;
      }
      function uh(n, e, t) {
        return n && n.length && e && e.length ? bi(n, e, R(t, 2)) : n;
      }
      function lh(n, e, t) {
        return n && n.length && e && e.length ? bi(n, e, u, t) : n;
      }
      var fh = ve(function(n, e) {
        var t = n == null ? 0 : n.length, r = gi(n, e);
        return Ml(n, on(e, function(i) {
          return _e(i, t) ? +i : i;
        }).sort(Xl)), r;
      });
      function oh(n, e) {
        var t = [];
        if (!(n && n.length))
          return t;
        var r = -1, i = [], f = n.length;
        for (e = R(e, 3); ++r < f; ) {
          var a = n[r];
          e(a, r, n) && (t.push(a), i.push(r));
        }
        return Ml(n, i), t;
      }
      function Gi(n) {
        return n == null ? n : es.call(n);
      }
      function ah(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (t && typeof t != "number" && En(n, e, t) ? (e = 0, t = r) : (e = e == null ? 0 : F(e), t = t === u ? r : F(t)), kn(n, e, t)) : [];
      }
      function sh(n, e) {
        return cr(n, e);
      }
      function ch(n, e, t) {
        return Si(n, e, R(t, 2));
      }
      function hh(n, e) {
        var t = n == null ? 0 : n.length;
        if (t) {
          var r = cr(n, e);
          if (r < t && re(n[r], e))
            return r;
        }
        return -1;
      }
      function dh(n, e) {
        return cr(n, e, !0);
      }
      function gh(n, e, t) {
        return Si(n, e, R(t, 2), !0);
      }
      function vh(n, e) {
        var t = n == null ? 0 : n.length;
        if (t) {
          var r = cr(n, e, !0) - 1;
          if (re(n[r], e))
            return r;
        }
        return -1;
      }
      function _h(n) {
        return n && n.length ? Pl(n) : [];
      }
      function ph(n, e) {
        return n && n.length ? Pl(n, R(e, 2)) : [];
      }
      function mh(n) {
        var e = n == null ? 0 : n.length;
        return e ? kn(n, 1, e) : [];
      }
      function wh(n, e, t) {
        return n && n.length ? (e = t || e === u ? 1 : F(e), kn(n, 0, e < 0 ? 0 : e)) : [];
      }
      function yh(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === u ? 1 : F(e), e = r - e, kn(n, e < 0 ? 0 : e, r)) : [];
      }
      function xh(n, e) {
        return n && n.length ? hr(n, R(e, 3), !1, !0) : [];
      }
      function bh(n, e) {
        return n && n.length ? hr(n, R(e, 3)) : [];
      }
      var Ah = H(function(n) {
        return Le(Cn(n, 1, dn, !0));
      }), Ch = H(function(n) {
        var e = Jn(n);
        return dn(e) && (e = u), Le(Cn(n, 1, dn, !0), R(e, 2));
      }), Sh = H(function(n) {
        var e = Jn(n);
        return e = typeof e == "function" ? e : u, Le(Cn(n, 1, dn, !0), u, e);
      });
      function Th(n) {
        return n && n.length ? Le(n) : [];
      }
      function Lh(n, e) {
        return n && n.length ? Le(n, R(e, 2)) : [];
      }
      function Ih(n, e) {
        return e = typeof e == "function" ? e : u, n && n.length ? Le(n, u, e) : [];
      }
      function zi(n) {
        if (!(n && n.length))
          return [];
        var e = 0;
        return n = be(n, function(t) {
          if (dn(t))
            return e = wn(t.length, e), !0;
        }), li(e, function(t) {
          return on(n, ri(t));
        });
      }
      function Cf(n, e) {
        if (!(n && n.length))
          return [];
        var t = zi(n);
        return e == null ? t : on(t, function(r) {
          return Pn(e, u, r);
        });
      }
      var Rh = H(function(n, e) {
        return dn(n) ? xt(n, e) : [];
      }), Eh = H(function(n) {
        return Li(be(n, dn));
      }), Wh = H(function(n) {
        var e = Jn(n);
        return dn(e) && (e = u), Li(be(n, dn), R(e, 2));
      }), Oh = H(function(n) {
        var e = Jn(n);
        return e = typeof e == "function" ? e : u, Li(be(n, dn), u, e);
      }), Bh = H(zi);
      function $h(n, e) {
        return Hl(n || [], e || [], yt);
      }
      function Mh(n, e) {
        return Hl(n || [], e || [], Ct);
      }
      var Nh = H(function(n) {
        var e = n.length, t = e > 1 ? n[e - 1] : u;
        return t = typeof t == "function" ? (n.pop(), t) : u, Cf(n, t);
      });
      function Sf(n) {
        var e = l(n);
        return e.__chain__ = !0, e;
      }
      function Ph(n, e) {
        return e(n), n;
      }
      function xr(n, e) {
        return e(n);
      }
      var Fh = ve(function(n) {
        var e = n.length, t = e ? n[0] : 0, r = this.__wrapped__, i = function(f) {
          return gi(f, n);
        };
        return e > 1 || this.__actions__.length || !(r instanceof z) || !_e(t) ? this.thru(i) : (r = r.slice(t, +t + (e ? 1 : 0)), r.__actions__.push({
          func: xr,
          args: [i],
          thisArg: u
        }), new Kn(r, this.__chain__).thru(function(f) {
          return e && !f.length && f.push(u), f;
        }));
      });
      function Dh() {
        return Sf(this);
      }
      function Uh() {
        return new Kn(this.value(), this.__chain__);
      }
      function Hh() {
        this.__values__ === u && (this.__values__ = Df(this.value()));
        var n = this.__index__ >= this.__values__.length, e = n ? u : this.__values__[this.__index__++];
        return { done: n, value: e };
      }
      function Gh() {
        return this;
      }
      function zh(n) {
        for (var e, t = this; t instanceof lr; ) {
          var r = mf(t);
          r.__index__ = 0, r.__values__ = u, e ? i.__wrapped__ = r : e = r;
          var i = r;
          t = t.__wrapped__;
        }
        return i.__wrapped__ = n, e;
      }
      function Yh() {
        var n = this.__wrapped__;
        if (n instanceof z) {
          var e = n;
          return this.__actions__.length && (e = new z(this)), e = e.reverse(), e.__actions__.push({
            func: xr,
            args: [Gi],
            thisArg: u
          }), new Kn(e, this.__chain__);
        }
        return this.thru(Gi);
      }
      function Xh() {
        return Ul(this.__wrapped__, this.__actions__);
      }
      var qh = dr(function(n, e, t) {
        V.call(n, t) ? ++n[t] : de(n, t, 1);
      });
      function Kh(n, e, t) {
        var r = N(n) ? ju : Ps;
        return t && En(n, e, t) && (e = u), r(n, R(e, 3));
      }
      function Zh(n, e) {
        var t = N(n) ? be : Al;
        return t(n, R(e, 3));
      }
      var kh = Ql(wf), Jh = Ql(yf);
      function Qh(n, e) {
        return Cn(br(n, e), 1);
      }
      function Vh(n, e) {
        return Cn(br(n, e), Oe);
      }
      function jh(n, e, t) {
        return t = t === u ? 1 : F(t), Cn(br(n, e), t);
      }
      function Tf(n, e) {
        var t = N(n) ? Xn : Te;
        return t(n, R(e, 3));
      }
      function Lf(n, e) {
        var t = N(n) ? ma : bl;
        return t(n, R(e, 3));
      }
      var nd = dr(function(n, e, t) {
        V.call(n, t) ? n[t].push(e) : de(n, t, [e]);
      });
      function ed(n, e, t, r) {
        n = Bn(n) ? n : it(n), t = t && !r ? F(t) : 0;
        var i = n.length;
        return t < 0 && (t = wn(i + t, 0)), Lr(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && qe(n, e, t) > -1;
      }
      var td = H(function(n, e, t) {
        var r = -1, i = typeof e == "function", f = Bn(n) ? d(n.length) : [];
        return Te(n, function(a) {
          f[++r] = i ? Pn(e, a, t) : bt(a, e, t);
        }), f;
      }), rd = dr(function(n, e, t) {
        de(n, t, e);
      });
      function br(n, e) {
        var t = N(n) ? on : Rl;
        return t(n, R(e, 3));
      }
      function id(n, e, t, r) {
        return n == null ? [] : (N(e) || (e = e == null ? [] : [e]), t = r ? u : t, N(t) || (t = t == null ? [] : [t]), Bl(n, e, t));
      }
      var ud = dr(function(n, e, t) {
        n[t ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function ld(n, e, t) {
        var r = N(n) ? ei : rl, i = arguments.length < 3;
        return r(n, R(e, 4), t, i, Te);
      }
      function fd(n, e, t) {
        var r = N(n) ? wa : rl, i = arguments.length < 3;
        return r(n, R(e, 4), t, i, bl);
      }
      function od(n, e) {
        var t = N(n) ? be : Al;
        return t(n, Sr(R(e, 3)));
      }
      function ad(n) {
        var e = N(n) ? ml : ec;
        return e(n);
      }
      function sd(n, e, t) {
        (t ? En(n, e, t) : e === u) ? e = 1 : e = F(e);
        var r = N(n) ? Os : tc;
        return r(n, e);
      }
      function cd(n) {
        var e = N(n) ? Bs : ic;
        return e(n);
      }
      function hd(n) {
        if (n == null)
          return 0;
        if (Bn(n))
          return Lr(n) ? Ze(n) : n.length;
        var e = In(n);
        return e == jn || e == ne ? n.size : yi(n).length;
      }
      function dd(n, e, t) {
        var r = N(n) ? ti : uc;
        return t && En(n, e, t) && (e = u), r(n, R(e, 3));
      }
      var gd = H(function(n, e) {
        if (n == null)
          return [];
        var t = e.length;
        return t > 1 && En(n, e[0], e[1]) ? e = [] : t > 2 && En(e[0], e[1], e[2]) && (e = [e[0]]), Bl(n, Cn(e, 1), []);
      }), Ar = Za || function() {
        return An.Date.now();
      };
      function vd(n, e) {
        if (typeof e != "function")
          throw new qn(A);
        return n = F(n), function() {
          if (--n < 1)
            return e.apply(this, arguments);
        };
      }
      function If(n, e, t) {
        return e = t ? u : e, e = n && e == null ? n.length : e, ge(n, Z, u, u, u, u, e);
      }
      function Rf(n, e) {
        var t;
        if (typeof e != "function")
          throw new qn(A);
        return n = F(n), function() {
          return --n > 0 && (t = e.apply(this, arguments)), n <= 1 && (e = u), t;
        };
      }
      var Yi = H(function(n, e, t) {
        var r = tn;
        if (t.length) {
          var i = Ce(t, tt(Yi));
          r |= w;
        }
        return ge(n, r, e, t, i);
      }), Ef = H(function(n, e, t) {
        var r = tn | bn;
        if (t.length) {
          var i = Ce(t, tt(Ef));
          r |= w;
        }
        return ge(e, r, n, t, i);
      });
      function Wf(n, e, t) {
        e = t ? u : e;
        var r = ge(n, B, u, u, u, u, u, e);
        return r.placeholder = Wf.placeholder, r;
      }
      function Of(n, e, t) {
        e = t ? u : e;
        var r = ge(n, q, u, u, u, u, u, e);
        return r.placeholder = Of.placeholder, r;
      }
      function Bf(n, e, t) {
        var r, i, f, a, s, h, v = 0, _ = !1, p = !1, C = !0;
        if (typeof n != "function")
          throw new qn(A);
        e = Qn(e) || 0, sn(t) && (_ = !!t.leading, p = "maxWait" in t, f = p ? wn(Qn(t.maxWait) || 0, e) : f, C = "trailing" in t ? !!t.trailing : C);
        function L(gn) {
          var ie = r, we = i;
          return r = i = u, v = gn, a = n.apply(we, ie), a;
        }
        function E(gn) {
          return v = gn, s = Lt(G, e), _ ? L(gn) : a;
        }
        function U(gn) {
          var ie = gn - h, we = gn - v, Vf = e - ie;
          return p ? Ln(Vf, f - we) : Vf;
        }
        function W(gn) {
          var ie = gn - h, we = gn - v;
          return h === u || ie >= e || ie < 0 || p && we >= f;
        }
        function G() {
          var gn = Ar();
          if (W(gn))
            return Y(gn);
          s = Lt(G, U(gn));
        }
        function Y(gn) {
          return s = u, C && r ? L(gn) : (r = i = u, a);
        }
        function Hn() {
          s !== u && Gl(s), v = 0, r = h = i = s = u;
        }
        function Wn() {
          return s === u ? a : Y(Ar());
        }
        function Gn() {
          var gn = Ar(), ie = W(gn);
          if (r = arguments, i = this, h = gn, ie) {
            if (s === u)
              return E(h);
            if (p)
              return Gl(s), s = Lt(G, e), L(h);
          }
          return s === u && (s = Lt(G, e)), a;
        }
        return Gn.cancel = Hn, Gn.flush = Wn, Gn;
      }
      var _d = H(function(n, e) {
        return xl(n, 1, e);
      }), pd = H(function(n, e, t) {
        return xl(n, Qn(e) || 0, t);
      });
      function md(n) {
        return ge(n, Nn);
      }
      function Cr(n, e) {
        if (typeof n != "function" || e != null && typeof e != "function")
          throw new qn(A);
        var t = function() {
          var r = arguments, i = e ? e.apply(this, r) : r[0], f = t.cache;
          if (f.has(i))
            return f.get(i);
          var a = n.apply(this, r);
          return t.cache = f.set(i, a) || f, a;
        };
        return t.cache = new (Cr.Cache || he)(), t;
      }
      Cr.Cache = he;
      function Sr(n) {
        if (typeof n != "function")
          throw new qn(A);
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
      function wd(n) {
        return Rf(2, n);
      }
      var yd = lc(function(n, e) {
        e = e.length == 1 && N(e[0]) ? on(e[0], Fn(R())) : on(Cn(e, 1), Fn(R()));
        var t = e.length;
        return H(function(r) {
          for (var i = -1, f = Ln(r.length, t); ++i < f; )
            r[i] = e[i].call(this, r[i]);
          return Pn(n, this, r);
        });
      }), Xi = H(function(n, e) {
        var t = Ce(e, tt(Xi));
        return ge(n, w, u, e, t);
      }), $f = H(function(n, e) {
        var t = Ce(e, tt($f));
        return ge(n, D, u, e, t);
      }), xd = ve(function(n, e) {
        return ge(n, Tn, u, u, u, e);
      });
      function bd(n, e) {
        if (typeof n != "function")
          throw new qn(A);
        return e = e === u ? e : F(e), H(n, e);
      }
      function Ad(n, e) {
        if (typeof n != "function")
          throw new qn(A);
        return e = e == null ? 0 : wn(F(e), 0), H(function(t) {
          var r = t[e], i = Re(t, 0, e);
          return r && Ae(i, r), Pn(n, this, i);
        });
      }
      function Cd(n, e, t) {
        var r = !0, i = !0;
        if (typeof n != "function")
          throw new qn(A);
        return sn(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), Bf(n, e, {
          leading: r,
          maxWait: e,
          trailing: i
        });
      }
      function Sd(n) {
        return If(n, 1);
      }
      function Td(n, e) {
        return Xi(Ri(e), n);
      }
      function Ld() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return N(n) ? n : [n];
      }
      function Id(n) {
        return Zn(n, J);
      }
      function Rd(n, e) {
        return e = typeof e == "function" ? e : u, Zn(n, J, e);
      }
      function Ed(n) {
        return Zn(n, O | J);
      }
      function Wd(n, e) {
        return e = typeof e == "function" ? e : u, Zn(n, O | J, e);
      }
      function Od(n, e) {
        return e == null || yl(n, e, yn(e));
      }
      function re(n, e) {
        return n === e || n !== n && e !== e;
      }
      var Bd = pr(pi), $d = pr(function(n, e) {
        return n >= e;
      }), He = Tl(function() {
        return arguments;
      }()) ? Tl : function(n) {
        return cn(n) && V.call(n, "callee") && !hl.call(n, "callee");
      }, N = d.isArray, Md = Ku ? Fn(Ku) : zs;
      function Bn(n) {
        return n != null && Tr(n.length) && !pe(n);
      }
      function dn(n) {
        return cn(n) && Bn(n);
      }
      function Nd(n) {
        return n === !0 || n === !1 || cn(n) && Rn(n) == ft;
      }
      var Ee = Ja || tu, Pd = Zu ? Fn(Zu) : Ys;
      function Fd(n) {
        return cn(n) && n.nodeType === 1 && !It(n);
      }
      function Dd(n) {
        if (n == null)
          return !0;
        if (Bn(n) && (N(n) || typeof n == "string" || typeof n.splice == "function" || Ee(n) || rt(n) || He(n)))
          return !n.length;
        var e = In(n);
        if (e == jn || e == ne)
          return !n.size;
        if (Tt(n))
          return !yi(n).length;
        for (var t in n)
          if (V.call(n, t))
            return !1;
        return !0;
      }
      function Ud(n, e) {
        return At(n, e);
      }
      function Hd(n, e, t) {
        t = typeof t == "function" ? t : u;
        var r = t ? t(n, e) : u;
        return r === u ? At(n, e, u, t) : !!r;
      }
      function qi(n) {
        if (!cn(n))
          return !1;
        var e = Rn(n);
        return e == Ft || e == ao || typeof n.message == "string" && typeof n.name == "string" && !It(n);
      }
      function Gd(n) {
        return typeof n == "number" && gl(n);
      }
      function pe(n) {
        if (!sn(n))
          return !1;
        var e = Rn(n);
        return e == Dt || e == xu || e == oo || e == co;
      }
      function Mf(n) {
        return typeof n == "number" && n == F(n);
      }
      function Tr(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= xe;
      }
      function sn(n) {
        var e = typeof n;
        return n != null && (e == "object" || e == "function");
      }
      function cn(n) {
        return n != null && typeof n == "object";
      }
      var Nf = ku ? Fn(ku) : qs;
      function zd(n, e) {
        return n === e || wi(n, e, Ni(e));
      }
      function Yd(n, e, t) {
        return t = typeof t == "function" ? t : u, wi(n, e, Ni(e), t);
      }
      function Xd(n) {
        return Pf(n) && n != +n;
      }
      function qd(n) {
        if (Rc(n))
          throw new $(b);
        return Ll(n);
      }
      function Kd(n) {
        return n === null;
      }
      function Zd(n) {
        return n == null;
      }
      function Pf(n) {
        return typeof n == "number" || cn(n) && Rn(n) == at;
      }
      function It(n) {
        if (!cn(n) || Rn(n) != se)
          return !1;
        var e = jt(n);
        if (e === null)
          return !0;
        var t = V.call(e, "constructor") && e.constructor;
        return typeof t == "function" && t instanceof t && kt.call(t) == Ya;
      }
      var Ki = Ju ? Fn(Ju) : Ks;
      function kd(n) {
        return Mf(n) && n >= -xe && n <= xe;
      }
      var Ff = Qu ? Fn(Qu) : Zs;
      function Lr(n) {
        return typeof n == "string" || !N(n) && cn(n) && Rn(n) == ct;
      }
      function Un(n) {
        return typeof n == "symbol" || cn(n) && Rn(n) == Ut;
      }
      var rt = Vu ? Fn(Vu) : ks;
      function Jd(n) {
        return n === u;
      }
      function Qd(n) {
        return cn(n) && In(n) == ht;
      }
      function Vd(n) {
        return cn(n) && Rn(n) == go;
      }
      var jd = pr(xi), ng = pr(function(n, e) {
        return n <= e;
      });
      function Df(n) {
        if (!n)
          return [];
        if (Bn(n))
          return Lr(n) ? ee(n) : On(n);
        if (vt && n[vt])
          return Oa(n[vt]());
        var e = In(n), t = e == jn ? oi : e == ne ? qt : it;
        return t(n);
      }
      function me(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Qn(n), n === Oe || n === -Oe) {
          var e = n < 0 ? -1 : 1;
          return e * io;
        }
        return n === n ? n : 0;
      }
      function F(n) {
        var e = me(n), t = e % 1;
        return e === e ? t ? e - t : e : 0;
      }
      function Uf(n) {
        return n ? Pe(F(n), 0, le) : 0;
      }
      function Qn(n) {
        if (typeof n == "number")
          return n;
        if (Un(n))
          return Nt;
        if (sn(n)) {
          var e = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = sn(e) ? e + "" : e;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = il(n);
        var t = Mo.test(n);
        return t || Po.test(n) ? va(n.slice(2), t ? 2 : 8) : $o.test(n) ? Nt : +n;
      }
      function Hf(n) {
        return oe(n, $n(n));
      }
      function eg(n) {
        return n ? Pe(F(n), -xe, xe) : n === 0 ? n : 0;
      }
      function Q(n) {
        return n == null ? "" : Dn(n);
      }
      var tg = nt(function(n, e) {
        if (Tt(e) || Bn(e)) {
          oe(e, yn(e), n);
          return;
        }
        for (var t in e)
          V.call(e, t) && yt(n, t, e[t]);
      }), Gf = nt(function(n, e) {
        oe(e, $n(e), n);
      }), Ir = nt(function(n, e, t, r) {
        oe(e, $n(e), n, r);
      }), rg = nt(function(n, e, t, r) {
        oe(e, yn(e), n, r);
      }), ig = ve(gi);
      function ug(n, e) {
        var t = je(n);
        return e == null ? t : wl(t, e);
      }
      var lg = H(function(n, e) {
        n = rn(n);
        var t = -1, r = e.length, i = r > 2 ? e[2] : u;
        for (i && En(e[0], e[1], i) && (r = 1); ++t < r; )
          for (var f = e[t], a = $n(f), s = -1, h = a.length; ++s < h; ) {
            var v = a[s], _ = n[v];
            (_ === u || re(_, Je[v]) && !V.call(n, v)) && (n[v] = f[v]);
          }
        return n;
      }), fg = H(function(n) {
        return n.push(u, uf), Pn(zf, u, n);
      });
      function og(n, e) {
        return nl(n, R(e, 3), fe);
      }
      function ag(n, e) {
        return nl(n, R(e, 3), _i);
      }
      function sg(n, e) {
        return n == null ? n : vi(n, R(e, 3), $n);
      }
      function cg(n, e) {
        return n == null ? n : Cl(n, R(e, 3), $n);
      }
      function hg(n, e) {
        return n && fe(n, R(e, 3));
      }
      function dg(n, e) {
        return n && _i(n, R(e, 3));
      }
      function gg(n) {
        return n == null ? [] : ar(n, yn(n));
      }
      function vg(n) {
        return n == null ? [] : ar(n, $n(n));
      }
      function Zi(n, e, t) {
        var r = n == null ? u : Fe(n, e);
        return r === u ? t : r;
      }
      function _g(n, e) {
        return n != null && of(n, e, Ds);
      }
      function ki(n, e) {
        return n != null && of(n, e, Us);
      }
      var pg = jl(function(n, e, t) {
        e != null && typeof e.toString != "function" && (e = Jt.call(e)), n[e] = t;
      }, Qi(Mn)), mg = jl(function(n, e, t) {
        e != null && typeof e.toString != "function" && (e = Jt.call(e)), V.call(n, e) ? n[e].push(t) : n[e] = [t];
      }, R), wg = H(bt);
      function yn(n) {
        return Bn(n) ? pl(n) : yi(n);
      }
      function $n(n) {
        return Bn(n) ? pl(n, !0) : Js(n);
      }
      function yg(n, e) {
        var t = {};
        return e = R(e, 3), fe(n, function(r, i, f) {
          de(t, e(r, i, f), r);
        }), t;
      }
      function xg(n, e) {
        var t = {};
        return e = R(e, 3), fe(n, function(r, i, f) {
          de(t, i, e(r, i, f));
        }), t;
      }
      var bg = nt(function(n, e, t) {
        sr(n, e, t);
      }), zf = nt(function(n, e, t, r) {
        sr(n, e, t, r);
      }), Ag = ve(function(n, e) {
        var t = {};
        if (n == null)
          return t;
        var r = !1;
        e = on(e, function(f) {
          return f = Ie(f, n), r || (r = f.length > 1), f;
        }), oe(n, $i(n), t), r && (t = Zn(t, O | nn | J, pc));
        for (var i = e.length; i--; )
          Ti(t, e[i]);
        return t;
      });
      function Cg(n, e) {
        return Yf(n, Sr(R(e)));
      }
      var Sg = ve(function(n, e) {
        return n == null ? {} : Vs(n, e);
      });
      function Yf(n, e) {
        if (n == null)
          return {};
        var t = on($i(n), function(r) {
          return [r];
        });
        return e = R(e), $l(n, t, function(r, i) {
          return e(r, i[0]);
        });
      }
      function Tg(n, e, t) {
        e = Ie(e, n);
        var r = -1, i = e.length;
        for (i || (i = 1, n = u); ++r < i; ) {
          var f = n == null ? u : n[ae(e[r])];
          f === u && (r = i, f = t), n = pe(f) ? f.call(n) : f;
        }
        return n;
      }
      function Lg(n, e, t) {
        return n == null ? n : Ct(n, e, t);
      }
      function Ig(n, e, t, r) {
        return r = typeof r == "function" ? r : u, n == null ? n : Ct(n, e, t, r);
      }
      var Xf = tf(yn), qf = tf($n);
      function Rg(n, e, t) {
        var r = N(n), i = r || Ee(n) || rt(n);
        if (e = R(e, 4), t == null) {
          var f = n && n.constructor;
          i ? t = r ? new f() : [] : sn(n) ? t = pe(f) ? je(jt(n)) : {} : t = {};
        }
        return (i ? Xn : fe)(n, function(a, s, h) {
          return e(t, a, s, h);
        }), t;
      }
      function Eg(n, e) {
        return n == null ? !0 : Ti(n, e);
      }
      function Wg(n, e, t) {
        return n == null ? n : Dl(n, e, Ri(t));
      }
      function Og(n, e, t, r) {
        return r = typeof r == "function" ? r : u, n == null ? n : Dl(n, e, Ri(t), r);
      }
      function it(n) {
        return n == null ? [] : fi(n, yn(n));
      }
      function Bg(n) {
        return n == null ? [] : fi(n, $n(n));
      }
      function $g(n, e, t) {
        return t === u && (t = e, e = u), t !== u && (t = Qn(t), t = t === t ? t : 0), e !== u && (e = Qn(e), e = e === e ? e : 0), Pe(Qn(n), e, t);
      }
      function Mg(n, e, t) {
        return e = me(e), t === u ? (t = e, e = 0) : t = me(t), n = Qn(n), Hs(n, e, t);
      }
      function Ng(n, e, t) {
        if (t && typeof t != "boolean" && En(n, e, t) && (e = t = u), t === u && (typeof e == "boolean" ? (t = e, e = u) : typeof n == "boolean" && (t = n, n = u)), n === u && e === u ? (n = 0, e = 1) : (n = me(n), e === u ? (e = n, n = 0) : e = me(e)), n > e) {
          var r = n;
          n = e, e = r;
        }
        if (t || n % 1 || e % 1) {
          var i = vl();
          return Ln(n + i * (e - n + ga("1e-" + ((i + "").length - 1))), e);
        }
        return Ai(n, e);
      }
      var Pg = et(function(n, e, t) {
        return e = e.toLowerCase(), n + (t ? Kf(e) : e);
      });
      function Kf(n) {
        return Ji(Q(n).toLowerCase());
      }
      function Zf(n) {
        return n = Q(n), n && n.replace(Do, La).replace(ia, "");
      }
      function Fg(n, e, t) {
        n = Q(n), e = Dn(e);
        var r = n.length;
        t = t === u ? r : Pe(F(t), 0, r);
        var i = t;
        return t -= e.length, t >= 0 && n.slice(t, i) == e;
      }
      function Dg(n) {
        return n = Q(n), n && wo.test(n) ? n.replace(Cu, Ia) : n;
      }
      function Ug(n) {
        return n = Q(n), n && So.test(n) ? n.replace(Xr, "\\$&") : n;
      }
      var Hg = et(function(n, e, t) {
        return n + (t ? "-" : "") + e.toLowerCase();
      }), Gg = et(function(n, e, t) {
        return n + (t ? " " : "") + e.toLowerCase();
      }), zg = Jl("toLowerCase");
      function Yg(n, e, t) {
        n = Q(n), e = F(e);
        var r = e ? Ze(n) : 0;
        if (!e || r >= e)
          return n;
        var i = (e - r) / 2;
        return _r(rr(i), t) + n + _r(tr(i), t);
      }
      function Xg(n, e, t) {
        n = Q(n), e = F(e);
        var r = e ? Ze(n) : 0;
        return e && r < e ? n + _r(e - r, t) : n;
      }
      function qg(n, e, t) {
        n = Q(n), e = F(e);
        var r = e ? Ze(n) : 0;
        return e && r < e ? _r(e - r, t) + n : n;
      }
      function Kg(n, e, t) {
        return t || e == null ? e = 0 : e && (e = +e), ns(Q(n).replace(qr, ""), e || 0);
      }
      function Zg(n, e, t) {
        return (t ? En(n, e, t) : e === u) ? e = 1 : e = F(e), Ci(Q(n), e);
      }
      function kg() {
        var n = arguments, e = Q(n[0]);
        return n.length < 3 ? e : e.replace(n[1], n[2]);
      }
      var Jg = et(function(n, e, t) {
        return n + (t ? "_" : "") + e.toLowerCase();
      });
      function Qg(n, e, t) {
        return t && typeof t != "number" && En(n, e, t) && (e = t = u), t = t === u ? le : t >>> 0, t ? (n = Q(n), n && (typeof e == "string" || e != null && !Ki(e)) && (e = Dn(e), !e && Ke(n)) ? Re(ee(n), 0, t) : n.split(e, t)) : [];
      }
      var Vg = et(function(n, e, t) {
        return n + (t ? " " : "") + Ji(e);
      });
      function jg(n, e, t) {
        return n = Q(n), t = t == null ? 0 : Pe(F(t), 0, n.length), e = Dn(e), n.slice(t, t + e.length) == e;
      }
      function nv(n, e, t) {
        var r = l.templateSettings;
        t && En(n, e, t) && (e = u), n = Q(n), e = Ir({}, e, r, rf);
        var i = Ir({}, e.imports, r.imports, rf), f = yn(i), a = fi(i, f), s, h, v = 0, _ = e.interpolate || Ht, p = "__p += '", C = ai((e.escape || Ht).source + "|" + _.source + "|" + (_ === Su ? Bo : Ht).source + "|" + (e.evaluate || Ht).source + "|$", "g"), L = "//# sourceURL=" + (V.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++aa + "]") + `
`;
        n.replace(C, function(W, G, Y, Hn, Wn, Gn) {
          return Y || (Y = Hn), p += n.slice(v, Gn).replace(Uo, Ra), G && (s = !0, p += `' +
__e(` + G + `) +
'`), Wn && (h = !0, p += `';
` + Wn + `;
__p += '`), Y && (p += `' +
((__t = (` + Y + `)) == null ? '' : __t) +
'`), v = Gn + W.length, W;
        }), p += `';
`;
        var E = V.call(e, "variable") && e.variable;
        if (!E)
          p = `with (obj) {
` + p + `
}
`;
        else if (Wo.test(E))
          throw new $(I);
        p = (h ? p.replace(vo, "") : p).replace(_o, "$1").replace(po, "$1;"), p = "function(" + (E || "obj") + `) {
` + (E ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (h ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
        var U = Jf(function() {
          return k(f, L + "return " + p).apply(u, a);
        });
        if (U.source = p, qi(U))
          throw U;
        return U;
      }
      function ev(n) {
        return Q(n).toLowerCase();
      }
      function tv(n) {
        return Q(n).toUpperCase();
      }
      function rv(n, e, t) {
        if (n = Q(n), n && (t || e === u))
          return il(n);
        if (!n || !(e = Dn(e)))
          return n;
        var r = ee(n), i = ee(e), f = ul(r, i), a = ll(r, i) + 1;
        return Re(r, f, a).join("");
      }
      function iv(n, e, t) {
        if (n = Q(n), n && (t || e === u))
          return n.slice(0, ol(n) + 1);
        if (!n || !(e = Dn(e)))
          return n;
        var r = ee(n), i = ll(r, ee(e)) + 1;
        return Re(r, 0, i).join("");
      }
      function uv(n, e, t) {
        if (n = Q(n), n && (t || e === u))
          return n.replace(qr, "");
        if (!n || !(e = Dn(e)))
          return n;
        var r = ee(n), i = ul(r, ee(e));
        return Re(r, i).join("");
      }
      function lv(n, e) {
        var t = Vn, r = We;
        if (sn(e)) {
          var i = "separator" in e ? e.separator : i;
          t = "length" in e ? F(e.length) : t, r = "omission" in e ? Dn(e.omission) : r;
        }
        n = Q(n);
        var f = n.length;
        if (Ke(n)) {
          var a = ee(n);
          f = a.length;
        }
        if (t >= f)
          return n;
        var s = t - Ze(r);
        if (s < 1)
          return r;
        var h = a ? Re(a, 0, s).join("") : n.slice(0, s);
        if (i === u)
          return h + r;
        if (a && (s += h.length - s), Ki(i)) {
          if (n.slice(s).search(i)) {
            var v, _ = h;
            for (i.global || (i = ai(i.source, Q(Tu.exec(i)) + "g")), i.lastIndex = 0; v = i.exec(_); )
              var p = v.index;
            h = h.slice(0, p === u ? s : p);
          }
        } else if (n.indexOf(Dn(i), s) != s) {
          var C = h.lastIndexOf(i);
          C > -1 && (h = h.slice(0, C));
        }
        return h + r;
      }
      function fv(n) {
        return n = Q(n), n && mo.test(n) ? n.replace(Au, Na) : n;
      }
      var ov = et(function(n, e, t) {
        return n + (t ? " " : "") + e.toUpperCase();
      }), Ji = Jl("toUpperCase");
      function kf(n, e, t) {
        return n = Q(n), e = t ? u : e, e === u ? Wa(n) ? Da(n) : ba(n) : n.match(e) || [];
      }
      var Jf = H(function(n, e) {
        try {
          return Pn(n, u, e);
        } catch (t) {
          return qi(t) ? t : new $(t);
        }
      }), av = ve(function(n, e) {
        return Xn(e, function(t) {
          t = ae(t), de(n, t, Yi(n[t], n));
        }), n;
      });
      function sv(n) {
        var e = n == null ? 0 : n.length, t = R();
        return n = e ? on(n, function(r) {
          if (typeof r[1] != "function")
            throw new qn(A);
          return [t(r[0]), r[1]];
        }) : [], H(function(r) {
          for (var i = -1; ++i < e; ) {
            var f = n[i];
            if (Pn(f[0], this, r))
              return Pn(f[1], this, r);
          }
        });
      }
      function cv(n) {
        return Ns(Zn(n, O));
      }
      function Qi(n) {
        return function() {
          return n;
        };
      }
      function hv(n, e) {
        return n == null || n !== n ? e : n;
      }
      var dv = Vl(), gv = Vl(!0);
      function Mn(n) {
        return n;
      }
      function Vi(n) {
        return Il(typeof n == "function" ? n : Zn(n, O));
      }
      function vv(n) {
        return El(Zn(n, O));
      }
      function _v(n, e) {
        return Wl(n, Zn(e, O));
      }
      var pv = H(function(n, e) {
        return function(t) {
          return bt(t, n, e);
        };
      }), mv = H(function(n, e) {
        return function(t) {
          return bt(n, t, e);
        };
      });
      function ji(n, e, t) {
        var r = yn(e), i = ar(e, r);
        t == null && !(sn(e) && (i.length || !r.length)) && (t = e, e = n, n = this, i = ar(e, yn(e)));
        var f = !(sn(t) && "chain" in t) || !!t.chain, a = pe(n);
        return Xn(i, function(s) {
          var h = e[s];
          n[s] = h, a && (n.prototype[s] = function() {
            var v = this.__chain__;
            if (f || v) {
              var _ = n(this.__wrapped__), p = _.__actions__ = On(this.__actions__);
              return p.push({ func: h, args: arguments, thisArg: n }), _.__chain__ = v, _;
            }
            return h.apply(n, Ae([this.value()], arguments));
          });
        }), n;
      }
      function wv() {
        return An._ === this && (An._ = Xa), this;
      }
      function nu() {
      }
      function yv(n) {
        return n = F(n), H(function(e) {
          return Ol(e, n);
        });
      }
      var xv = Wi(on), bv = Wi(ju), Av = Wi(ti);
      function Qf(n) {
        return Fi(n) ? ri(ae(n)) : js(n);
      }
      function Cv(n) {
        return function(e) {
          return n == null ? u : Fe(n, e);
        };
      }
      var Sv = nf(), Tv = nf(!0);
      function eu() {
        return [];
      }
      function tu() {
        return !1;
      }
      function Lv() {
        return {};
      }
      function Iv() {
        return "";
      }
      function Rv() {
        return !0;
      }
      function Ev(n, e) {
        if (n = F(n), n < 1 || n > xe)
          return [];
        var t = le, r = Ln(n, le);
        e = R(e), n -= le;
        for (var i = li(r, e); ++t < n; )
          e(t);
        return i;
      }
      function Wv(n) {
        return N(n) ? on(n, ae) : Un(n) ? [n] : On(pf(Q(n)));
      }
      function Ov(n) {
        var e = ++za;
        return Q(n) + e;
      }
      var Bv = vr(function(n, e) {
        return n + e;
      }, 0), $v = Oi("ceil"), Mv = vr(function(n, e) {
        return n / e;
      }, 1), Nv = Oi("floor");
      function Pv(n) {
        return n && n.length ? or(n, Mn, pi) : u;
      }
      function Fv(n, e) {
        return n && n.length ? or(n, R(e, 2), pi) : u;
      }
      function Dv(n) {
        return tl(n, Mn);
      }
      function Uv(n, e) {
        return tl(n, R(e, 2));
      }
      function Hv(n) {
        return n && n.length ? or(n, Mn, xi) : u;
      }
      function Gv(n, e) {
        return n && n.length ? or(n, R(e, 2), xi) : u;
      }
      var zv = vr(function(n, e) {
        return n * e;
      }, 1), Yv = Oi("round"), Xv = vr(function(n, e) {
        return n - e;
      }, 0);
      function qv(n) {
        return n && n.length ? ui(n, Mn) : 0;
      }
      function Kv(n, e) {
        return n && n.length ? ui(n, R(e, 2)) : 0;
      }
      return l.after = vd, l.ary = If, l.assign = tg, l.assignIn = Gf, l.assignInWith = Ir, l.assignWith = rg, l.at = ig, l.before = Rf, l.bind = Yi, l.bindAll = av, l.bindKey = Ef, l.castArray = Ld, l.chain = Sf, l.chunk = Nc, l.compact = Pc, l.concat = Fc, l.cond = sv, l.conforms = cv, l.constant = Qi, l.countBy = qh, l.create = ug, l.curry = Wf, l.curryRight = Of, l.debounce = Bf, l.defaults = lg, l.defaultsDeep = fg, l.defer = _d, l.delay = pd, l.difference = Dc, l.differenceBy = Uc, l.differenceWith = Hc, l.drop = Gc, l.dropRight = zc, l.dropRightWhile = Yc, l.dropWhile = Xc, l.fill = qc, l.filter = Zh, l.flatMap = Qh, l.flatMapDeep = Vh, l.flatMapDepth = jh, l.flatten = xf, l.flattenDeep = Kc, l.flattenDepth = Zc, l.flip = md, l.flow = dv, l.flowRight = gv, l.fromPairs = kc, l.functions = gg, l.functionsIn = vg, l.groupBy = nd, l.initial = Qc, l.intersection = Vc, l.intersectionBy = jc, l.intersectionWith = nh, l.invert = pg, l.invertBy = mg, l.invokeMap = td, l.iteratee = Vi, l.keyBy = rd, l.keys = yn, l.keysIn = $n, l.map = br, l.mapKeys = yg, l.mapValues = xg, l.matches = vv, l.matchesProperty = _v, l.memoize = Cr, l.merge = bg, l.mergeWith = zf, l.method = pv, l.methodOf = mv, l.mixin = ji, l.negate = Sr, l.nthArg = yv, l.omit = Ag, l.omitBy = Cg, l.once = wd, l.orderBy = id, l.over = xv, l.overArgs = yd, l.overEvery = bv, l.overSome = Av, l.partial = Xi, l.partialRight = $f, l.partition = ud, l.pick = Sg, l.pickBy = Yf, l.property = Qf, l.propertyOf = Cv, l.pull = ih, l.pullAll = Af, l.pullAllBy = uh, l.pullAllWith = lh, l.pullAt = fh, l.range = Sv, l.rangeRight = Tv, l.rearg = xd, l.reject = od, l.remove = oh, l.rest = bd, l.reverse = Gi, l.sampleSize = sd, l.set = Lg, l.setWith = Ig, l.shuffle = cd, l.slice = ah, l.sortBy = gd, l.sortedUniq = _h, l.sortedUniqBy = ph, l.split = Qg, l.spread = Ad, l.tail = mh, l.take = wh, l.takeRight = yh, l.takeRightWhile = xh, l.takeWhile = bh, l.tap = Ph, l.throttle = Cd, l.thru = xr, l.toArray = Df, l.toPairs = Xf, l.toPairsIn = qf, l.toPath = Wv, l.toPlainObject = Hf, l.transform = Rg, l.unary = Sd, l.union = Ah, l.unionBy = Ch, l.unionWith = Sh, l.uniq = Th, l.uniqBy = Lh, l.uniqWith = Ih, l.unset = Eg, l.unzip = zi, l.unzipWith = Cf, l.update = Wg, l.updateWith = Og, l.values = it, l.valuesIn = Bg, l.without = Rh, l.words = kf, l.wrap = Td, l.xor = Eh, l.xorBy = Wh, l.xorWith = Oh, l.zip = Bh, l.zipObject = $h, l.zipObjectDeep = Mh, l.zipWith = Nh, l.entries = Xf, l.entriesIn = qf, l.extend = Gf, l.extendWith = Ir, ji(l, l), l.add = Bv, l.attempt = Jf, l.camelCase = Pg, l.capitalize = Kf, l.ceil = $v, l.clamp = $g, l.clone = Id, l.cloneDeep = Ed, l.cloneDeepWith = Wd, l.cloneWith = Rd, l.conformsTo = Od, l.deburr = Zf, l.defaultTo = hv, l.divide = Mv, l.endsWith = Fg, l.eq = re, l.escape = Dg, l.escapeRegExp = Ug, l.every = Kh, l.find = kh, l.findIndex = wf, l.findKey = og, l.findLast = Jh, l.findLastIndex = yf, l.findLastKey = ag, l.floor = Nv, l.forEach = Tf, l.forEachRight = Lf, l.forIn = sg, l.forInRight = cg, l.forOwn = hg, l.forOwnRight = dg, l.get = Zi, l.gt = Bd, l.gte = $d, l.has = _g, l.hasIn = ki, l.head = bf, l.identity = Mn, l.includes = ed, l.indexOf = Jc, l.inRange = Mg, l.invoke = wg, l.isArguments = He, l.isArray = N, l.isArrayBuffer = Md, l.isArrayLike = Bn, l.isArrayLikeObject = dn, l.isBoolean = Nd, l.isBuffer = Ee, l.isDate = Pd, l.isElement = Fd, l.isEmpty = Dd, l.isEqual = Ud, l.isEqualWith = Hd, l.isError = qi, l.isFinite = Gd, l.isFunction = pe, l.isInteger = Mf, l.isLength = Tr, l.isMap = Nf, l.isMatch = zd, l.isMatchWith = Yd, l.isNaN = Xd, l.isNative = qd, l.isNil = Zd, l.isNull = Kd, l.isNumber = Pf, l.isObject = sn, l.isObjectLike = cn, l.isPlainObject = It, l.isRegExp = Ki, l.isSafeInteger = kd, l.isSet = Ff, l.isString = Lr, l.isSymbol = Un, l.isTypedArray = rt, l.isUndefined = Jd, l.isWeakMap = Qd, l.isWeakSet = Vd, l.join = eh, l.kebabCase = Hg, l.last = Jn, l.lastIndexOf = th, l.lowerCase = Gg, l.lowerFirst = zg, l.lt = jd, l.lte = ng, l.max = Pv, l.maxBy = Fv, l.mean = Dv, l.meanBy = Uv, l.min = Hv, l.minBy = Gv, l.stubArray = eu, l.stubFalse = tu, l.stubObject = Lv, l.stubString = Iv, l.stubTrue = Rv, l.multiply = zv, l.nth = rh, l.noConflict = wv, l.noop = nu, l.now = Ar, l.pad = Yg, l.padEnd = Xg, l.padStart = qg, l.parseInt = Kg, l.random = Ng, l.reduce = ld, l.reduceRight = fd, l.repeat = Zg, l.replace = kg, l.result = Tg, l.round = Yv, l.runInContext = c, l.sample = ad, l.size = hd, l.snakeCase = Jg, l.some = dd, l.sortedIndex = sh, l.sortedIndexBy = ch, l.sortedIndexOf = hh, l.sortedLastIndex = dh, l.sortedLastIndexBy = gh, l.sortedLastIndexOf = vh, l.startCase = Vg, l.startsWith = jg, l.subtract = Xv, l.sum = qv, l.sumBy = Kv, l.template = nv, l.times = Ev, l.toFinite = me, l.toInteger = F, l.toLength = Uf, l.toLower = ev, l.toNumber = Qn, l.toSafeInteger = eg, l.toString = Q, l.toUpper = tv, l.trim = rv, l.trimEnd = iv, l.trimStart = uv, l.truncate = lv, l.unescape = fv, l.uniqueId = Ov, l.upperCase = ov, l.upperFirst = Ji, l.each = Tf, l.eachRight = Lf, l.first = bf, ji(l, function() {
        var n = {};
        return fe(l, function(e, t) {
          V.call(l.prototype, t) || (n[t] = e);
        }), n;
      }(), { chain: !1 }), l.VERSION = m, Xn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        l[n].placeholder = l;
      }), Xn(["drop", "take"], function(n, e) {
        z.prototype[n] = function(t) {
          t = t === u ? 1 : wn(F(t), 0);
          var r = this.__filtered__ && !e ? new z(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = Ln(t, r.__takeCount__) : r.__views__.push({
            size: Ln(t, le),
            type: n + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, z.prototype[n + "Right"] = function(t) {
          return this.reverse()[n](t).reverse();
        };
      }), Xn(["filter", "map", "takeWhile"], function(n, e) {
        var t = e + 1, r = t == lt || t == ro;
        z.prototype[n] = function(i) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: R(i, 3),
            type: t
          }), f.__filtered__ = f.__filtered__ || r, f;
        };
      }), Xn(["head", "last"], function(n, e) {
        var t = "take" + (e ? "Right" : "");
        z.prototype[n] = function() {
          return this[t](1).value()[0];
        };
      }), Xn(["initial", "tail"], function(n, e) {
        var t = "drop" + (e ? "" : "Right");
        z.prototype[n] = function() {
          return this.__filtered__ ? new z(this) : this[t](1);
        };
      }), z.prototype.compact = function() {
        return this.filter(Mn);
      }, z.prototype.find = function(n) {
        return this.filter(n).head();
      }, z.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, z.prototype.invokeMap = H(function(n, e) {
        return typeof n == "function" ? new z(this) : this.map(function(t) {
          return bt(t, n, e);
        });
      }), z.prototype.reject = function(n) {
        return this.filter(Sr(R(n)));
      }, z.prototype.slice = function(n, e) {
        n = F(n);
        var t = this;
        return t.__filtered__ && (n > 0 || e < 0) ? new z(t) : (n < 0 ? t = t.takeRight(-n) : n && (t = t.drop(n)), e !== u && (e = F(e), t = e < 0 ? t.dropRight(-e) : t.take(e - n)), t);
      }, z.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, z.prototype.toArray = function() {
        return this.take(le);
      }, fe(z.prototype, function(n, e) {
        var t = /^(?:filter|find|map|reject)|While$/.test(e), r = /^(?:head|last)$/.test(e), i = l[r ? "take" + (e == "last" ? "Right" : "") : e], f = r || /^find/.test(e);
        !i || (l.prototype[e] = function() {
          var a = this.__wrapped__, s = r ? [1] : arguments, h = a instanceof z, v = s[0], _ = h || N(a), p = function(G) {
            var Y = i.apply(l, Ae([G], s));
            return r && C ? Y[0] : Y;
          };
          _ && t && typeof v == "function" && v.length != 1 && (h = _ = !1);
          var C = this.__chain__, L = !!this.__actions__.length, E = f && !C, U = h && !L;
          if (!f && _) {
            a = U ? a : new z(this);
            var W = n.apply(a, s);
            return W.__actions__.push({ func: xr, args: [p], thisArg: u }), new Kn(W, C);
          }
          return E && U ? n.apply(this, s) : (W = this.thru(p), E ? r ? W.value()[0] : W.value() : W);
        });
      }), Xn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var e = Kt[n], t = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
        l.prototype[n] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var f = this.value();
            return e.apply(N(f) ? f : [], i);
          }
          return this[t](function(a) {
            return e.apply(N(a) ? a : [], i);
          });
        };
      }), fe(z.prototype, function(n, e) {
        var t = l[e];
        if (t) {
          var r = t.name + "";
          V.call(Ve, r) || (Ve[r] = []), Ve[r].push({ name: e, func: t });
        }
      }), Ve[gr(u, bn).name] = [{
        name: "wrapper",
        func: u
      }], z.prototype.clone = fs, z.prototype.reverse = os, z.prototype.value = as, l.prototype.at = Fh, l.prototype.chain = Dh, l.prototype.commit = Uh, l.prototype.next = Hh, l.prototype.plant = zh, l.prototype.reverse = Yh, l.prototype.toJSON = l.prototype.valueOf = l.prototype.value = Xh, l.prototype.first = l.prototype.head, vt && (l.prototype[vt] = Gh), l;
    }, ke = Ua();
    Be ? ((Be.exports = ke)._ = ke, Vr._ = ke) : An._ = ke;
  }).call(Rt);
})(pu, pu.exports);
const Er = pu.exports, M = (o) => {
  if (!!o)
    return Er.isNumber(o) ? `${o}px` : o;
}, jv = () => {
  const o = Zv();
  return (x, u) => {
    var S;
    return u || (u = o == null ? void 0 : o.slots), (((S = u == null ? void 0 : u.default) == null ? void 0 : S.call(u)) || []).map((b) => b.children && Array.isArray(b.children) ? b.children : b).flat().filter((b) => {
      var A;
      return (A = b.type.name) == null ? void 0 : A.endsWith(x);
    });
  };
}, Wr = /* @__PURE__ */ _n({
  __name: "icon",
  props: {
    name: { default: "UserAvatar" },
    size: null,
    color: null,
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(o, { emit: x }) {
    const u = X(() => [
      "i-icon",
      `icon-${o.name}`,
      o.disabled && "i-icon-is-disabled"
    ]), m = X(() => ({
      color: o.color || void 0,
      fontSize: M(o.size)
    }));
    return (S, b) => (K(), j("i", {
      class: ue(hn(u)),
      style: ye(hn(m))
    }, null, 6));
  }
});
const iu = {
  install(o) {
    o.component("i-icon", Wr);
  }
};
const n_ = _n({
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
  setup(o, {
    slots: x
  }) {
    return () => {
      var m;
      const u = (m = x.default) == null ? void 0 : m.call(x);
      return en("div", {
        class: ["i-divider", o.dashed && "i-divider--dashed", u && "i-divider--with-text", u && `i-divider--with-text-${o.align}`]
      }, [u && en("span", {
        class: "i-divider--text"
      }, [u])]);
    };
  }
}), uu = {
  install(o) {
    o.component("i-divider", n_);
  }
}, e_ = /* @__PURE__ */ _n({
  __name: "grid",
  props: {
    align: { default: "top" },
    gutter: null,
    justify: { default: "start" }
  },
  setup(o) {
    const x = X(() => [
      "i-grid",
      o.align && `i-grid--align-${o.align}`,
      o.justify && `i-grid--justify-${o.justify}`
    ]);
    return Br("gutter", o.gutter), (u, m) => (K(), j("div", {
      class: ue(hn(x))
    }, [
      xn(u.$slots, "default", { gutter: o.gutter })
    ], 2));
  }
});
const t_ = /* @__PURE__ */ _n({
  __name: "grid-item",
  props: {
    align: null,
    gutter: null,
    offset: null,
    order: null,
    span: { default: 24 },
    width: null
  },
  setup(o) {
    const x = (b) => {
      let A = parseInt(b.toString());
      return A > 24 && (A = 24), A < 0 && (A = 0), A;
    }, u = X(() => [
      "i-grid__item",
      `i-grid__item--span-${x(o.span)}`,
      o.offset && `i-grid__item--offset-${x(o.offset)}`,
      o.order && `i-grid__item--order-${x(o.order)}`,
      o.align && `i-grid__item--align-${o.align}`
    ]), m = $r("gutter"), S = X(() => [
      {
        paddingLeft: M(o.gutter) || M(m),
        paddingRight: M(o.gutter) || M(m),
        flex: o.width ? `0 0 ${M(o.width)}` : "1",
        maxWidth: o.width && M(o.width)
      }
    ]);
    return (b, A) => (K(), j("div", {
      class: ue(hn(u)),
      style: ye(hn(S))
    }, [
      xn(b.$slots, "default")
    ], 6));
  }
});
const lu = {
  install(o) {
    o.component("i-grid", e_), o.component("i-grid-item", t_);
  }
}, r_ = /* @__PURE__ */ _n({
  __name: "layout",
  setup(o) {
    const x = vn([]), u = X(() => [
      "i-layout",
      x.value.length > 0 && "i-layout-has-aside"
    ]);
    return Br("layoutCtx", {
      onAsideMount: (m) => x.value.push(m),
      onAsideUnMount: (m) => {
        x.value = x.value.filter((S) => S !== m);
      }
    }), (m, S) => (K(), j("div", {
      class: ue(hn(u))
    }, [
      xn(m.$slots, "default")
    ], 2));
  }
});
const i_ = /* @__PURE__ */ _n({
  __name: "layout-aside",
  props: {
    width: { default: 240 }
  },
  setup(o) {
    const u = (() => {
      let A = 0;
      return (I = "") => (A += 1, `${I}${A}`);
    })()("i_layout_aside"), m = $r("layoutCtx");
    Ot(() => {
      var A;
      (A = m == null ? void 0 : m.onAsideMount) == null || A.call(m, u);
    }), mu(() => {
      var A;
      (A = m == null ? void 0 : m.onAsideUnMount) == null || A.call(m, u);
    });
    const S = M(o.width), b = X(() => [
      {
        width: S,
        maxWidth: S,
        minWidth: S,
        flex: `0 0 ${S}`
      }
    ]);
    return (A, I) => (K(), j("aside", {
      class: "i-layout--aside",
      style: ye(hn(b))
    }, [
      xn(A.$slots, "default")
    ], 4));
  }
});
const Mr = (o, x) => {
  const u = o.__vccOpts || o;
  for (const [m, S] of x)
    u[m] = S;
  return u;
}, u_ = {}, l_ = { class: "i-layout--content" };
function f_(o, x) {
  return K(), j("main", l_, [
    xn(o.$slots, "default")
  ]);
}
const o_ = /* @__PURE__ */ Mr(u_, [["render", f_]]);
const a_ = {}, s_ = { class: "i-layout--footer" };
function c_(o, x) {
  return K(), j("footer", s_, [
    xn(o.$slots, "default")
  ]);
}
const h_ = /* @__PURE__ */ Mr(a_, [["render", c_]]);
const d_ = {}, g_ = { class: "i-layout--header" };
function v_(o, x) {
  return K(), j("header", g_, [
    xn(o.$slots, "default")
  ]);
}
const __ = /* @__PURE__ */ Mr(d_, [["render", v_]]), fu = {
  install(o) {
    o.component("i-layout", r_), o.component("i-layout-aside", i_), o.component("i-layout-content", o_), o.component("i-layout-footer", h_), o.component("i-layout-header", __);
  }
}, p_ = /* @__PURE__ */ _n({
  __name: "scrollbar",
  props: {
    height: null,
    width: null
  },
  emits: ["scrollX", "scrollY"],
  setup(o, { emit: x }) {
    const u = wu({
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
    }), m = vn(null);
    Rr(() => {
      var Nn, Vn, We, $t, Mt, lt;
      const B = ((Nn = m.value) == null ? void 0 : Nn.clientWidth) || 0, q = ((Vn = m.value) == null ? void 0 : Vn.clientHeight) || 0;
      u.viewCurrentWidth = B, u.viewCurrentHeight = q;
      const w = (((We = m.value) == null ? void 0 : We.scrollWidth) || 0) - B, D = ((($t = m.value) == null ? void 0 : $t.scrollHeight) || 0) - q;
      u.viewWidth = w, u.viewHeight = D;
      const Z = (B - 4) ** 2 / (((Mt = m.value) == null ? void 0 : Mt.scrollWidth) || 1);
      u.thumbWidth = Z, u.scaleX = (B - Z - 4) / Z;
      const Tn = (q - 4) ** 2 / (((lt = m.value) == null ? void 0 : lt.scrollHeight) || 1);
      u.thumbHeight = Tn, u.scaleY = (q - Tn - 4) / Tn;
    });
    const S = vn(0), b = vn(0), A = (B) => {
      S.value !== Number(B.toFixed(4)) && x("scrollX", Number(B.toFixed(4)) || 0), S.value = Number(B.toFixed(4));
    }, I = (B) => {
      b.value !== Number(B.toFixed(4)) && x("scrollY", Number(B.toFixed(4)) || 0), b.value = Number(B.toFixed(4));
    }, an = (B) => {
      if (u.autoScroll) {
        const q = B.target.scrollLeft / u.viewWidth || 0, w = B.target.scrollTop / u.viewHeight || 0;
        A(q), I(w), u.thumbLeft = q * u.scaleX * u.thumbWidth, u.thumbTop = w * u.scaleY * u.thumbHeight;
      }
    }, P = vn(0), y = vn(0), O = (B) => {
      var Tn, Nn, Vn;
      const q = u.viewCurrentWidth - u.thumbWidth - 4;
      P.value += B.movementX, P.value < 0 && (P.value = 0), P.value > q && (P.value = q), u.thumbLeft = P.value;
      const w = u.viewCurrentHeight - u.thumbHeight - 4;
      y.value += B.movementY, y.value < 0 && (y.value = 0), y.value > w && (y.value = w), u.thumbTop = y.value;
      const D = (((Tn = m.value) == null ? void 0 : Tn.scrollLeft) || 0) / u.viewWidth || 0, Z = (((Nn = m.value) == null ? void 0 : Nn.scrollTop) || 0) / u.viewHeight || 0;
      A(D), I(Z), (Vn = m.value) == null || Vn.scrollTo({
        left: (P.value + u.thumbWidth * D) * u.scaleX,
        top: (y.value + u.thumbHeight * Z) * u.scaleY
      });
    }, nn = () => {
      u.downShowThumb = !1, u.autoScroll = !0, window.removeEventListener("mouseup", nn), window.removeEventListener("mousemove", O);
    }, J = () => {
      u.downShowThumb = !0, u.autoScroll = !1, P.value = u.thumbLeft, y.value = u.thumbTop, window.addEventListener("mouseup", nn), window.addEventListener("mousemove", O);
    }, ln = (B) => {
      var w;
      const q = B.clientX - B.target.getBoundingClientRect().left;
      u.thumbLeft = q, S.value = 0, setTimeout(() => {
        var Z;
        const D = (((Z = m.value) == null ? void 0 : Z.scrollLeft) || 0) / u.viewWidth || 0;
        A(D);
      }), (w = m.value) == null || w.scrollTo({
        left: q * u.scaleX
      });
    }, pn = (B) => {
      var w;
      const q = B.clientY - B.target.getBoundingClientRect().top;
      u.thumbTop = q, b.value = 0, setTimeout(() => {
        var Z;
        const D = (((Z = m.value) == null ? void 0 : Z.scrollTop) || 0) / u.viewHeight || 0;
        I(D);
      }), (w = m.value) == null || w.scrollTo({
        top: q * u.scaleY
      });
    }, tn = X(() => [
      {
        maxHeight: o.height ? M(o.height) : "auto",
        maxWidth: o.width ? M(o.width) : "auto",
        userSelect: u.autoScroll ? "unset" : "none"
      }
    ]), bn = X(() => [
      {
        height: M(u.thumbHeight),
        transform: `translateY(${u.thumbTop}px)`
      }
    ]), zn = X(() => [
      {
        width: M(u.thumbWidth),
        transform: `translateX(${u.thumbLeft}px)`
      }
    ]);
    return (B, q) => (K(), j("div", {
      class: "i-scrollbar",
      onMouseenter: q[0] || (q[0] = (w) => u.hoverShowThumb = !0),
      onMouseleave: q[1] || (q[1] = (w) => u.hoverShowThumb = !1)
    }, [
      ut("div", {
        ref_key: "scrollWrap",
        ref: m,
        class: "i-scrollbar__wrap",
        style: ye(hn(tn)),
        onScroll: an
      }, [
        xn(B.$slots, "default")
      ], 36),
      o.height ? (K(), j("div", {
        key: 0,
        class: "i-scrollbar__barY",
        onClick: pn
      }, [
        en(Bt, { name: "i-fade" }, {
          default: Ge(() => [
            u.hoverShowThumb || u.downShowThumb ? (K(), j("div", {
              key: 0,
              class: "i-scrollbar__thumbY",
              style: ye(hn(bn)),
              onMousedown: J
            }, null, 36)) : Sn("", !0)
          ]),
          _: 1
        })
      ])) : Sn("", !0),
      o.width ? (K(), j("div", {
        key: 1,
        class: "i-scrollbar__barX",
        onClick: ln
      }, [
        en(Bt, { name: "i-fade" }, {
          default: Ge(() => [
            u.hoverShowThumb || u.downShowThumb ? (K(), j("div", {
              key: 0,
              class: "i-scrollbar__thumbX",
              style: ye(hn(zn)),
              onMousedown: J
            }, null, 36)) : Sn("", !0)
          ]),
          _: 1
        })
      ])) : Sn("", !0)
    ], 32));
  }
});
const ou = {
  install(o) {
    o.component("i-scrollbar", p_);
  }
}, m_ = _n({
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
    click: (o) => !0
  },
  setup(o, { emit: x }) {
    return {
      cls: X(() => ["i-dropdown"])
    };
  }
});
function w_(o, x, u, m, S, b) {
  return K(), j("div", {
    class: ue(o.cls)
  }, [
    xn(o.$slots, "default")
  ], 2);
}
const y_ = /* @__PURE__ */ Mr(m_, [["render", w_]]), au = {
  install(o) {
    o.component("i-dropdown", y_);
  }
};
const x_ = _n({
  name: "Breadcrumb",
  props: {
    maxItemWidth: [String, Number],
    separator: [String, HTMLElement]
  },
  setup(o, {
    slots: x
  }) {
    return Br("breadcrumbCtx", {
      maxItemWidth: o.maxItemWidth,
      slots: x
    }), () => {
      var u;
      return en("div", {
        class: "i-breadcrumb"
      }, [(u = x.default) == null ? void 0 : u.call(x)]);
    };
  }
}), b_ = _n({
  name: "BreadcrumbItem",
  props: {
    disabled: Boolean,
    maxItemWidth: [String, Number],
    maxWidth: [String, Number]
  },
  setup(o, {
    slots: x
  }) {
    const u = $r("breadcrumbCtx", void 0), m = X(() => {
      let b;
      o.maxWidth && (b = M(o.maxWidth));
      let A;
      return u != null && u.maxItemWidth ? A = M(u == null ? void 0 : u.maxItemWidth) : o.maxItemWidth && (A = M(o.maxItemWidth)), {
        maxWidth: b || A || "200px"
      };
    }), S = X(() => {
      var b, A, I;
      return (I = (A = u == null ? void 0 : (b = u.slots).separator) == null ? void 0 : A.call(b)) != null ? I : en(Wr, {
        name: "ArrowRight",
        size: 16
      }, null);
    });
    return () => {
      var A;
      const b = (A = x.default) == null ? void 0 : A.call(x);
      return en("div", {
        class: ["i-breadcrumb__item", o.disabled && "i-breadcrumb-is-disabled"]
      }, [en("span", {
        class: "i-breadcrumb__inner",
        style: m.value
      }, [b]), en("span", {
        class: "i-breadcrumb__separator"
      }, [S.value])]);
    };
  }
}), su = {
  install(o) {
    o.component("i-breadcrumb", x_), o.component("i-breadcrumb-item", b_);
  }
}, A_ = /* @__PURE__ */ _n({
  __name: "back-top",
  props: {
    target: null,
    visibleHeight: { default: 0 },
    smooth: { type: Boolean, default: !0 }
  },
  emits: ["click", "scroll"],
  setup(o, { emit: x }) {
    const u = !o.target, m = vn(!(o.visibleHeight > 0)), S = (I) => Er.isString(I) ? document.querySelector(I) : u ? document == null ? void 0 : document.documentElement : I, b = Er.throttle((I) => {
      I.target.scrollTop >= o.visibleHeight ? m.value = !0 : m.value = !1, x("scroll");
    }, 16);
    Ot(() => {
      const I = S(o.target);
      I == null || I.addEventListener("scroll", b);
    });
    const A = () => {
      const I = S(o.target);
      I == null || I.scrollTo({
        top: 0,
        behavior: o.smooth ? "smooth" : "auto"
      }), x("click");
    };
    return (I, an) => {
      const P = Wt("i-icon"), y = Wt("i-button");
      return K(), j("div", {
        class: "'i-back-top'",
        onClick: A
      }, [
        en(Bt, { name: "i-fade" }, {
          default: Ge(() => [
            m.value && I.$slots.default ? xn(I.$slots, "default", { key: 0 }) : Sn("", !0)
          ]),
          _: 3
        }),
        en(Bt, { name: "i-fade" }, {
          default: Ge(() => [
            m.value && !I.$slots.default ? (K(), Or(y, {
              key: 0,
              shape: "circle",
              class: "i-back-top--button"
            }, {
              default: Ge(() => [
                en(P, { name: "ArrowUpBold" })
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
  install(o) {
    o.component("i-back-top", A_);
  }
}, C_ = ["src"], S_ = /* @__PURE__ */ _n({
  __name: "avatar",
  props: {
    image: null,
    size: null,
    shape: null,
    color: null
  },
  setup(o) {
    const x = $r("avatarGroupCtx", void 0), u = X(() => (o.size ? o.size : x == null ? void 0 : x.size) || 32), m = X(() => (o.shape ? o.shape : x == null ? void 0 : x.shape) || "circle"), S = X(() => o.color ? o.color : x == null ? void 0 : x.color), b = vn(!0), A = () => {
      b.value = !1;
    }, I = X(() => [
      "i-avatar",
      m.value === "round" && `i-avatar__shape-${m.value}`
    ]), an = X(() => [
      {
        width: M(u.value),
        height: M(u.value),
        background: M(S.value)
      }
    ]);
    return (P, y) => {
      const O = Wt("i-icon");
      return K(), j("div", {
        class: ue(hn(I)),
        style: ye(hn(an))
      }, [
        o.image && b.value ? (K(), j("img", {
          key: 0,
          class: "i-avatar__image",
          src: o.image,
          onError: A,
          referrerPolicy: "no-referrer"
        }, null, 40, C_)) : Sn("", !0),
        (!o.image || !b.value) && P.$slots.default ? xn(P.$slots, "default", { key: 1 }) : Sn("", !0),
        (!o.image || !b.value) && !P.$slots.default ? (K(), Or(O, {
          key: 2,
          name: "User",
          color: "#fff"
        })) : Sn("", !0)
      ], 6);
    };
  }
});
const T_ = /* @__PURE__ */ _n({
  __name: "avatar-group",
  props: {
    size: null,
    shape: null,
    color: null,
    cascading: { default: "right" }
  },
  setup(o) {
    Br("avatarGroupCtx", {
      size: o.size,
      shape: o.shape,
      color: o.color
    });
    const x = X(() => ["i-avatar-group", `i-avatar__offset-${o.cascading}`]);
    return (u, m) => (K(), j("div", {
      class: ue(hn(x))
    }, [
      xn(u.$slots, "default")
    ], 2));
  }
});
const hu = {
  install(o) {
    o.component("i-avatar", S_), o.component("i-avatar-group", T_);
  }
}, L_ = { class: "i-badge" }, I_ = /* @__PURE__ */ _n({
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
  setup(o) {
    const x = () => typeof o.count == "number" && o.count > o.maxCount ? `${o.maxCount}+` : o.count;
    let u = !o.count;
    typeof o.count == "number" && (u = o.count < 1 && !o.showZero);
    const m = () => {
      const A = {};
      return o.offset && (o.offset[0] && (A.right = +o.offset[0]), o.offset[1] && (A.marginTop = +o.offset[1])), A;
    }, S = X(() => [
      "i-badge__content",
      o.dot ? "i-badge--dot" : o.shape && `i-badge--${o.shape}`,
      o.size === "small" && `i-badge__size-${o.size}`
    ]), b = X(() => [
      {
        background: o.color,
        ...m()
      }
    ]);
    return (A, I) => (K(), j("div", L_, [
      xn(A.$slots, "default"),
      hn(u) ? Sn("", !0) : (K(), j("sup", {
        key: 0,
        class: ue(hn(S)),
        style: ye(hn(b))
      }, [
        o.dot ? Sn("", !0) : (K(), j(kv, { key: 0 }, [
          no(yu(x()), 1)
        ], 64))
      ], 6))
    ]));
  }
});
const du = {
  install(o) {
    o.component("i-badge", I_);
  }
};
const R_ = {
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
}, eo = _n({
  name: "CarouselItem",
  props: {
    ...R_
  },
  emits: {
    clickItem: (o) => !0
  },
  setup(o, {
    slots: x,
    emit: u
  }) {
    const m = X(() => o.type !== "card" ? 0 : o.innerCurrent === 0 && o.index === o.childrenLength - 1 ? -1 : o.innerCurrent === o.childrenLength - 1 && o.index === 0 ? o.childrenLength : o.index < o.innerCurrent - 1 && o.innerCurrent - o.index >= o.childrenLength / 2 ? o.childrenLength + 1 : o.index > o.innerCurrent + 1 && o.index - o.innerCurrent >= o.childrenLength / 2 ? -2 : o.index), S = 210 / 332, b = 0.415, A = X(() => {
      if (o.type !== "card")
        return 0;
      const y = o.wrapWidth, O = !I.value && o.childrenLength > 2 ? m.value : o.index;
      return Math.abs(O - o.innerCurrent) <= 1 ? y * ((O - o.innerCurrent) * (1 - b * S) - b + 1) / 2 : O < o.innerCurrent ? -b * (1 + S) * y / 2 : (2 + b * (S - 1)) * y / 2;
    }), I = X(() => o.index === o.innerCurrent), an = X(() => {
      if (o.type !== "card")
        return 0;
      const y = !I.value && o.childrenLength > 2 ? m.value : o.index, O = y === o.innerCurrent, nn = Math.round(Math.abs(y - o.innerCurrent)) <= 1;
      return O ? 2 : nn ? 1 : 0;
    }), P = X(() => {
      if (o.type === "card") {
        const O = (!I.value && o.childrenLength > 2 ? m.value : o.index) === o.innerCurrent;
        return {
          transform: `translateX(${A.value}px) scale(${O ? 1 : S})`,
          transition: `transform ${o.duration / 1e3}s ease`,
          zIndex: an.value
        };
      }
      return {};
    });
    return () => {
      var O;
      const y = (O = x.default) == null ? void 0 : O.call(x);
      return en("li", {
        class: "i-carousel-item",
        style: P.value,
        onClick: () => {
          u("clickItem", o.index);
        }
      }, [y]);
    };
  }
}), E_ = _n({
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
    enter: (o) => !0
  },
  setup(o, {
    slots: x,
    emit: u
  }) {
    const m = X(() => Er.range(0, o.itemNum)), S = (b) => {
      u("enter", b);
    };
    return () => en("ul", {
      class: "i-carousel__navigation"
    }, [m.value.map((b) => en("li", {
      class: ["i-carousel__navigation-item", o.current - 1 === b && "i-carousel__navigation-item__active"],
      onMouseenter: () => S(b),
      key: b
    }, null))]);
  }
});
function W_(o) {
  return typeof o == "function" || Object.prototype.toString.call(o) === "[object Object]" && !Jv(o);
}
const O_ = _n({
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
    change: (o) => !0
  },
  setup(o, {
    emit: x
  }) {
    const u = vn(0), m = vn(0), S = vn(!1), b = vn(null), A = vn(0), I = vn(!1), an = () => {
      const D = jv()("CarouselItem");
      m.value = D.length;
      const Z = D.map((Tn, Nn) => {
        let Vn;
        return en(eo, {
          index: Nn,
          innerCurrent: u.value,
          ifAnimation: S.value,
          childrenLength: m.value,
          wrapWidth: A.value,
          type: o.type,
          duration: o.duration,
          onClickItem: (We) => {
            o.type === "card" && (u.value = We, x("change", We));
          }
        }, W_(Vn = Tn.children.default()) ? Vn : {
          default: () => [Vn]
        });
      });
      if (m.value > 0 && o.type === "default") {
        const Tn = jf(Z[0], {
          key: -1
        }), Nn = jf(Z[Z.length - 1], {
          key: m.value
        });
        Z.unshift(Nn), Z.push(Tn);
      }
      return Z;
    }, P = an().length, y = (w) => o.type === "default" ? w >= m.value ? 0 : w <= -1 ? m.value - 1 : w + 1 : w;
    Ot(() => {
      u.value = y(o.defaultCurrent), A.value = b.value.getBoundingClientRect().width;
    });
    const O = (w, D) => {
      S.value = !0, u.value = w, D === "last" ? w > 0 ? x("change", w - 1) : x("change", m.value - 1) : w <= m.value ? x("change", w - 1) : x("change", 0);
    }, nn = () => {
      o.stopOnHover && (I.value = !0);
    }, J = () => {
      o.stopOnHover && (I.value = !1);
    };
    let ln = 0;
    Et(() => S.value, () => {
      S.value && (ln && clearTimeout(ln), ln = setTimeout(() => {
        S.value = !1, ln = 0, o.type !== "card" && (u.value + 1 >= P && (u.value = 1), u.value <= 0 && (u.value = P - 2));
      }, o.duration + 50));
    });
    let pn = 0;
    const tn = () => {
      pn && (clearTimeout(pn), pn = 0);
    }, bn = () => {
      !I.value && o.autoPlay && o.interval > 0 && (tn(), pn = setTimeout(() => {
        O(u.value + 1);
      }, u.value === 0 ? o.interval * 1e3 - (o.duration + 50) : o.interval * 1e3));
    }, zn = X(() => [o.autoPlay, u.value, o.duration, o.interval]);
    Et(() => zn.value, () => {
      bn();
    }), mu(() => {
      tn();
    });
    const B = (w) => {
      if (S.value)
        return !1;
      if (w === "last")
        return u.value - 1 < 0 ? O(m.value - 1, "last") : O(u.value - 1, "last");
      if (w === "next")
        return o.type === "card" ? O(u.value + 1 >= P ? 0 : u.value + 1, "next") : O(u.value + 1, "next");
    }, q = () => {
      if (o.type !== "card")
        return o.direction === "vertical" ? {
          transform: `translate3d(0, -${u.value * 100}%, 0px)`,
          transition: S.value ? `transform ${o.duration / 1e3}s ease` : ""
        } : {
          transform: `translate3d(-${u.value * 100}%, 0px, 0px)`,
          transition: S.value ? `transform ${o.duration / 1e3}s ease` : ""
        };
    };
    return () => en("div", {
      class: ["i-carousel", o.direction === "vertical" && "i-carousel__vertical", o.type === "card" && "i-carousel__card"],
      style: {
        width: M(o.width),
        height: M(o.height)
      },
      ref: b
    }, [en("div", {
      class: "i-carousel__content",
      onMouseenter: nn,
      onMouseleave: J
    }, [en("ul", {
      class: "i-carousel__wrapper",
      style: q()
    }, [an()])]), en(E_, {
      itemNum: m.value,
      current: o.type === "default" ? u.value : u.value + 1,
      onEnter: (w) => O(o.type === "default" ? w + 1 : w)
    }, null), en("div", {
      class: "i-carousel__arrow-last",
      onClick: () => B("last")
    }, [en(Wr, {
      color: "#fff",
      name: "ArrowLeft"
    }, null)]), en("div", {
      class: "i-carousel__arrow-next",
      onClick: () => B("next")
    }, [en(Wr, {
      color: "#fff",
      name: "ArrowRight"
    }, null)])]);
  }
}), gu = {
  install(o) {
    o.component("i-carousel", O_), o.component("i-carousel-item", eo);
  }
}, B_ = { class: "i-alert--content" }, $_ = {
  key: 0,
  class: "i-alert--title"
}, M_ = { class: "i-alert--description" }, N_ = {
  key: 0,
  class: "i-alert--operation"
}, P_ = /* @__PURE__ */ _n({
  __name: "alert",
  props: {
    closable: { type: Boolean, default: !1 },
    title: null,
    type: { default: "info" }
  },
  setup(o) {
    const x = vn(!1), u = () => {
      x.value = !0;
    }, m = X(() => ["i-alert", `i-alert--type-${o.type}`]), S = X(() => ({
      info: "TipInfo",
      success: "TipCheckFill",
      warning: "TipWarningFill",
      error: "TipCloseFill"
    })[o.type]);
    return (b, A) => {
      const I = Wt("i-icon");
      return x.value ? Sn("", !0) : (K(), j("div", {
        key: 0,
        class: ue(hn(m))
      }, [
        en(I, {
          name: hn(S),
          size: 16
        }, null, 8, ["name"]),
        ut("div", B_, [
          o.title ? (K(), j("div", $_, yu(o.title), 1)) : Sn("", !0),
          ut("div", M_, [
            xn(b.$slots, "default"),
            b.$slots.operation ? (K(), j("div", N_, [
              xn(b.$slots, "operation")
            ])) : Sn("", !0)
          ])
        ]),
        o.closable ? (K(), j("div", {
          key: 0,
          class: "i-alert--close-btn",
          onClick: u
        }, [
          en(I, {
            name: "Close",
            size: 16
          })
        ])) : Sn("", !0)
      ], 2));
    };
  }
});
const vu = {
  install(o) {
    o.component("i-alert", P_);
  }
}, F_ = ["data-popper-placement"], D_ = ["data-popper-placement"], U_ = { class: "i-popup__text" }, H_ = /* @__PURE__ */ _n({
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
  setup(o, { emit: x }) {
    let u = document.querySelector("#i-popup-wrapper");
    u || (u = document.createElement("div"), u.className = "i-popup-wrapper", u.id = "i-popup-wrapper", document.body.append(u));
    const m = (P, y, O) => {
      let nn = (O == null ? void 0 : O.width) || 0, J = (O == null ? void 0 : O.height) || 0;
      const ln = {
        top: M(y.left + (y.width - nn) / 2),
        "top-left": M(y.left),
        "top-right": M(y.left + (y.width - nn)),
        bottom: M(y.left + (y.width - nn) / 2),
        "bottom-left": M(y.left),
        "bottom-right": M(y.left + (y.width - nn)),
        left: M(y.left - nn - 16),
        "left-top": M(y.left - nn - 16),
        "left-bottom": M(y.left - nn - 16),
        right: M(y.left + y.width + 16),
        "right-top": M(y.left + y.width + 16),
        "right-bottom": M(y.left + y.width + 16)
      }, pn = {
        top: M(y.top - J - 16),
        "top-left": M(y.top - J - 16),
        "top-right": M(y.top - J - 16),
        bottom: M(y.top + y.height + 16),
        "bottom-left": M(y.top + y.height + 16),
        "bottom-right": M(y.top + y.height + 16),
        left: M(y.top + (y.height - J) / 2),
        "left-top": M(y.top),
        "left-bottom": M(y.top + (y.height - J)),
        right: M(y.top + (y.height - J) / 2),
        "right-top": M(y.top),
        "right-bottom": M(y.top + (y.height - J))
      };
      return {
        left: ln[P],
        top: pn[P]
      };
    }, S = vn(null);
    Rr(() => {
      x("getRef", S);
    });
    const b = wu({
      rePlaceNum: 0,
      styles: {},
      currentPlacement: o.placement
    }), A = (P) => {
      if (S.value) {
        const y = P.split("-")[0], O = P.split("-")[1] ? "-" + P.split("-")[1] : "", nn = window.innerWidth, J = window.innerHeight, ln = S.value.getBoundingClientRect(), pn = ln.width, tn = ln.height, bn = ln.top, zn = ln.left;
        let B = P;
        bn < J && zn < nn && b.rePlaceNum < 3 && (y === "top" && bn < 0 && (B = "bottom" + O), y === "bottom" && J - tn - bn < 0 && (B = "top" + O), y === "left" && zn < 0 && (B = "right" + O), y === "right" && nn - pn - zn < 0 && (B = "left" + O), b.rePlaceNum += 1), b.currentPlacement = B;
      }
    };
    Rr(() => {
      A(b.currentPlacement);
    }), Rr(() => {
      var y;
      const P = (y = S.value) == null ? void 0 : y.getBoundingClientRect();
      b.styles = m(b.currentPlacement, {
        left: o.left,
        top: o.top,
        width: o.width,
        height: o.height
      }, P);
    });
    const I = X(() => ["i-popup", o.contentClass]), an = X(() => [{ ...o.contentStyle }, { ...b.styles }]);
    return (P, y) => (K(), j("div", null, [
      (K(), Or(Qv, { to: "#i-popup-wrapper" }, [
        en(Bt, { name: "i-fade" }, {
          default: Ge(() => [
            o.visible ? (K(), j("div", {
              key: 0,
              ref_key: "popupRef",
              ref: S,
              class: ue(hn(I)),
              style: ye(hn(an)),
              "data-popper-placement": b.currentPlacement
            }, [
              ut("div", {
                class: "i-popup__arrow",
                "data-popper-placement": b.currentPlacement
              }, null, 8, D_),
              ut("div", U_, [
                xn(P.$slots, "default")
              ])
            ], 14, F_)) : Sn("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
});
const G_ = { class: "i-popup__reference" }, z_ = /* @__PURE__ */ _n({
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
  setup(o, { emit: x }) {
    const u = wu({
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }), m = (w) => {
      const D = w.getBoundingClientRect();
      u.top = ((D == null ? void 0 : D.top) || 0) + window.scrollY, u.left = ((D == null ? void 0 : D.left) || 0) + window.scrollX, u.width = (D == null ? void 0 : D.width) || 0, u.height = (D == null ? void 0 : D.height) || 0;
    }, S = vn(o.defaultVisible), b = X(() => {
      var w;
      return (w = o.visible) != null ? w : S.value;
    }), A = (w, D) => {
      for (; w; ) {
        if (w === D)
          return !0;
        w = w.parentNode;
      }
      return !1;
    };
    Ot(() => {
      const w = I.value.children[0];
      m(w);
    });
    const I = vn(null);
    Et(() => o.updateLocation, () => {
      const w = I.value.children[0];
      m(w);
    });
    const an = (w, D) => {
      const Z = I.value.children[0];
      D && m(Z), S.value = D, x("trigger", D);
    }, P = () => {
      S.value = !1, x("trigger", !1);
    }, y = vn(null), O = (w) => {
      y.value = w.value;
    }, nn = vn(!1), J = (w) => {
      A(w.target, y.value) || (A(w.target, I.value) || P(), nn.value = !1, window.removeEventListener("click", J));
    };
    Et(nn, (w) => {
      if (w)
        return window.addEventListener("click", J), () => window.removeEventListener("click", J);
    });
    const ln = (w) => {
      o.trigger === "click" && (an(w, !b.value), b.value && setTimeout(() => nn.value = !0));
    }, pn = vn(!1), tn = (w) => {
      w.preventDefault(), A(w.target, y.value) || (P(), pn.value = !1, window.removeEventListener("click", tn), window.removeEventListener("contextmenu", tn));
    };
    Et(pn, (w) => {
      if (w)
        return window.addEventListener("click", tn), window.addEventListener("contextmenu", tn), () => {
          window.removeEventListener("click", tn), window.removeEventListener("contextmenu", tn);
        };
    });
    const bn = (w) => {
      o.trigger === "context-menu" && (w.preventDefault(), an(w, !b.value), b.value && setTimeout(() => pn.value = !0));
    }, zn = (w) => {
      w.preventDefault(), A(w.target, y.value) || (A(w.target, I.value) || P(), window.removeEventListener("click", J));
    }, B = (w) => {
      o.trigger === "hover" && (an(w, !b.value), setTimeout(() => {
        window.addEventListener("mouseover", zn);
      }));
    }, q = new ResizeObserver((w) => {
      u.width = w[0].contentRect.width || 0, u.height = w[0].contentRect.height || 0;
    });
    return Ot(() => {
      q.observe(I.value);
    }), mu(() => {
      q.disconnect();
    }), (w, D) => (K(), j("div", G_, [
      ut("section", {
        onClick: ln,
        onMouseenter: B,
        onContextmenu: bn,
        ref_key: "triggerNode",
        ref: I
      }, [
        xn(w.$slots, "default")
      ], 544),
      en(H_, {
        contentStyle: o.portalStyle,
        contentClass: o.portalClassName,
        visible: hn(b) && !o.disabled,
        placement: o.placement,
        top: u.top,
        left: u.left,
        width: u.width,
        height: u.height,
        onGetRef: O
      }, {
        default: Ge(() => [
          no(yu(o.content), 1)
        ]),
        _: 1
      }, 8, ["contentStyle", "contentClass", "visible", "placement", "top", "left", "width", "height"])
    ]));
  }
});
const _u = {
  install(o) {
    o.component("i-popup", z_);
  }
}, X_ = {
  install(o) {
    var x, u, m, S, b, A, I, an, P, y, O, nn, J, ln;
    (x = ru.install) == null || x.call(ru, o), (u = iu.install) == null || u.call(iu, o), (m = uu.install) == null || m.call(uu, o), (S = lu.install) == null || S.call(lu, o), (b = fu.install) == null || b.call(fu, o), (A = ou.install) == null || A.call(ou, o), (I = au.install) == null || I.call(au, o), (an = su.install) == null || an.call(su, o), (P = cu.install) == null || P.call(cu, o), (y = hu.install) == null || y.call(hu, o), (O = du.install) == null || O.call(du, o), (nn = gu.install) == null || nn.call(gu, o), (J = vu.install) == null || J.call(vu, o), (ln = _u.install) == null || ln.call(_u, o);
  }
};
export {
  P_ as Alert,
  vu as AlertPlugin,
  S_ as Avatar,
  T_ as AvatarGroup,
  hu as AvatarPlugin,
  A_ as BackTop,
  cu as BackTopPlugin,
  I_ as Badge,
  du as BadgePlugin,
  x_ as Breadcrumb,
  b_ as BreadcrumbItem,
  su as BreadcrumbPlugin,
  Vv as Button,
  ru as ButtonPlugin,
  O_ as Carousel,
  eo as CarouselItem,
  gu as CarouselPlugin,
  n_ as Divider,
  uu as DividerPlugin,
  y_ as Dropdown,
  au as DropdownPlugin,
  e_ as Grid,
  t_ as GridItem,
  lu as GridPlugin,
  Wr as Icon,
  iu as IconPlugin,
  r_ as Layout,
  fu as LayoutPlugin,
  z_ as Popup,
  _u as PopupPlugin,
  p_ as Scrollbar,
  ou as ScrollbarPlugin,
  X_ as default
};
