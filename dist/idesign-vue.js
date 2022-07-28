import { defineComponent as fe, computed as F, resolveComponent as Bt, openBlock as Q, createElementBlock as ie, normalizeClass as un, unref as ge, createBlock as $r, createCommentVNode as Ae, renderSlot as ye, getCurrentInstance as n_, normalizeStyle as yn, createVNode as k, provide as lt, inject as at, ref as oe, onMounted as $t, onUnmounted as yu, reactive as xu, watchEffect as Wr, createElementVNode as ut, Transition as Nt, withCtx as kn, mergeProps as ro, isVNode as bu, Fragment as t_, createTextVNode as io, toDisplayString as Cu, watch as Ot, cloneVNode as to, Teleport as r_ } from "vue";
const i_ = /* @__PURE__ */ fe({
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
  setup(a, { emit: x }) {
    const u = (A) => {
      a.disabled || x("click", A);
    }, w = F(() => [
      "i-button",
      `i-button--type-${a.type}`,
      a.variant !== "base" && `i-button--variant-${a.variant}`,
      a.size !== "medium" && `i-button--size-${a.size}`,
      a.shape !== "round" && `i-button--shape-${a.shape}`,
      a.active && "i-button-active",
      a.disabled && "i-button-disabled"
    ]);
    return (A, y) => {
      const b = Bt("i-icon");
      return Q(), ie("button", {
        class: un(ge(w)),
        onClick: u
      }, [
        a.icon ? (Q(), $r(b, {
          key: 0,
          class: "i-button-icon",
          name: a.icon
        }, null, 8, ["name"])) : Ae("", !0),
        ye(A.$slots, "default")
      ], 2);
    };
  }
});
const ru = {
  install(a) {
    a.component("i-button", i_);
  }
};
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(a, x) {
  (function() {
    var u, w = "4.17.21", A = 200, y = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", b = "Expected a function", L = "Invalid `variable` option passed into `_.template`", K = "__lodash_hash_undefined__", T = 500, m = "__lodash_placeholder__", R = 1, G = 2, Z = 4, te = 1, he = 2, ee = 1, xe = 2, ke = 4, $ = 8, J = 16, C = 32, U = 64, V = 128, Se = 256, Ne = 512, Qe = 30, Wn = "...", Mt = 800, Pt = 16, ot = 1, oo = 2, fo = 3, On = 1 / 0, xn = 9007199254740991, so = 17976931348623157e292, Ft = 0 / 0, ln = 4294967295, co = ln - 1, ho = ln >>> 1, go = [
      ["ary", V],
      ["bind", ee],
      ["bindKey", xe],
      ["curry", $],
      ["curryRight", J],
      ["flip", Ne],
      ["partial", C],
      ["partialRight", U],
      ["rearg", Se]
    ], zn = "[object Arguments]", Dt = "[object Array]", vo = "[object AsyncFunction]", ft = "[object Boolean]", st = "[object Date]", _o = "[object DOMException]", Ut = "[object Error]", Ht = "[object Function]", Su = "[object GeneratorFunction]", Ve = "[object Map]", ct = "[object Number]", po = "[object Null]", sn = "[object Object]", Tu = "[object Promise]", mo = "[object Proxy]", ht = "[object RegExp]", je = "[object Set]", dt = "[object String]", kt = "[object Symbol]", wo = "[object Undefined]", gt = "[object WeakMap]", yo = "[object WeakSet]", vt = "[object ArrayBuffer]", Gn = "[object DataView]", Mr = "[object Float32Array]", Pr = "[object Float64Array]", Fr = "[object Int8Array]", Dr = "[object Int16Array]", Ur = "[object Int32Array]", Hr = "[object Uint8Array]", kr = "[object Uint8ClampedArray]", zr = "[object Uint16Array]", Gr = "[object Uint32Array]", xo = /\b__p \+= '';/g, bo = /\b(__p \+=) '' \+/g, Co = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Lu = /&(?:amp|lt|gt|quot|#39);/g, Iu = /[&<>"']/g, Ao = RegExp(Lu.source), So = RegExp(Iu.source), To = /<%-([\s\S]+?)%>/g, Lo = /<%([\s\S]+?)%>/g, Ru = /<%=([\s\S]+?)%>/g, Io = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ro = /^\w*$/, Eo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yr = /[\\^$.*+?()[\]{}|]/g, Wo = RegExp(Yr.source), Xr = /^\s+/, Oo = /\s/, Bo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, $o = /\{\n\/\* \[wrapped with (.+)\] \*/, No = /,? & /, Mo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Po = /[()=,{}\[\]\/\s]/, Fo = /\\(\\)?/g, Do = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Eu = /\w*$/, Uo = /^[-+]0x[0-9a-f]+$/i, Ho = /^0b[01]+$/i, ko = /^\[object .+?Constructor\]$/, zo = /^0o[0-7]+$/i, Go = /^(?:0|[1-9]\d*)$/, Yo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, zt = /($^)/, Xo = /['\n\r\u2028\u2029\\]/g, Gt = "\\ud800-\\udfff", qo = "\\u0300-\\u036f", Ko = "\\ufe20-\\ufe2f", Zo = "\\u20d0-\\u20ff", Wu = qo + Ko + Zo, Ou = "\\u2700-\\u27bf", Bu = "a-z\\xdf-\\xf6\\xf8-\\xff", Jo = "\\xac\\xb1\\xd7\\xf7", Qo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Vo = "\\u2000-\\u206f", jo = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", $u = "A-Z\\xc0-\\xd6\\xd8-\\xde", Nu = "\\ufe0e\\ufe0f", Mu = Jo + Qo + Vo + jo, qr = "['\u2019]", ef = "[" + Gt + "]", Pu = "[" + Mu + "]", Yt = "[" + Wu + "]", Fu = "\\d+", nf = "[" + Ou + "]", Du = "[" + Bu + "]", Uu = "[^" + Gt + Mu + Fu + Ou + Bu + $u + "]", Kr = "\\ud83c[\\udffb-\\udfff]", tf = "(?:" + Yt + "|" + Kr + ")", Hu = "[^" + Gt + "]", Zr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Jr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Yn = "[" + $u + "]", ku = "\\u200d", zu = "(?:" + Du + "|" + Uu + ")", rf = "(?:" + Yn + "|" + Uu + ")", Gu = "(?:" + qr + "(?:d|ll|m|re|s|t|ve))?", Yu = "(?:" + qr + "(?:D|LL|M|RE|S|T|VE))?", Xu = tf + "?", qu = "[" + Nu + "]?", uf = "(?:" + ku + "(?:" + [Hu, Zr, Jr].join("|") + ")" + qu + Xu + ")*", lf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", af = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ku = qu + Xu + uf, of = "(?:" + [nf, Zr, Jr].join("|") + ")" + Ku, ff = "(?:" + [Hu + Yt + "?", Yt, Zr, Jr, ef].join("|") + ")", sf = RegExp(qr, "g"), cf = RegExp(Yt, "g"), Qr = RegExp(Kr + "(?=" + Kr + ")|" + ff + Ku, "g"), hf = RegExp([
      Yn + "?" + Du + "+" + Gu + "(?=" + [Pu, Yn, "$"].join("|") + ")",
      rf + "+" + Yu + "(?=" + [Pu, Yn + zu, "$"].join("|") + ")",
      Yn + "?" + zu + "+" + Gu,
      Yn + "+" + Yu,
      af,
      lf,
      Fu,
      of
    ].join("|"), "g"), df = RegExp("[" + ku + Gt + Wu + Nu + "]"), gf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, vf = [
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
    ], _f = -1, ae = {};
    ae[Mr] = ae[Pr] = ae[Fr] = ae[Dr] = ae[Ur] = ae[Hr] = ae[kr] = ae[zr] = ae[Gr] = !0, ae[zn] = ae[Dt] = ae[vt] = ae[ft] = ae[Gn] = ae[st] = ae[Ut] = ae[Ht] = ae[Ve] = ae[ct] = ae[sn] = ae[ht] = ae[je] = ae[dt] = ae[gt] = !1;
    var le = {};
    le[zn] = le[Dt] = le[vt] = le[Gn] = le[ft] = le[st] = le[Mr] = le[Pr] = le[Fr] = le[Dr] = le[Ur] = le[Ve] = le[ct] = le[sn] = le[ht] = le[je] = le[dt] = le[kt] = le[Hr] = le[kr] = le[zr] = le[Gr] = !0, le[Ut] = le[Ht] = le[gt] = !1;
    var pf = {
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
    }, mf = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, wf = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, yf = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, xf = parseFloat, bf = parseInt, Zu = typeof Wt == "object" && Wt && Wt.Object === Object && Wt, Cf = typeof self == "object" && self && self.Object === Object && self, be = Zu || Cf || Function("return this")(), Vr = x && !x.nodeType && x, Bn = Vr && !0 && a && !a.nodeType && a, Ju = Bn && Bn.exports === Vr, jr = Ju && Zu.process, ze = function() {
      try {
        var c = Bn && Bn.require && Bn.require("util").types;
        return c || jr && jr.binding && jr.binding("util");
      } catch {
      }
    }(), Qu = ze && ze.isArrayBuffer, Vu = ze && ze.isDate, ju = ze && ze.isMap, el = ze && ze.isRegExp, nl = ze && ze.isSet, tl = ze && ze.isTypedArray;
    function Me(c, g, d) {
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
    function Af(c, g, d, I) {
      for (var N = -1, j = c == null ? 0 : c.length; ++N < j; ) {
        var pe = c[N];
        g(I, pe, d(pe), c);
      }
      return I;
    }
    function Ge(c, g) {
      for (var d = -1, I = c == null ? 0 : c.length; ++d < I && g(c[d], d, c) !== !1; )
        ;
      return c;
    }
    function Sf(c, g) {
      for (var d = c == null ? 0 : c.length; d-- && g(c[d], d, c) !== !1; )
        ;
      return c;
    }
    function rl(c, g) {
      for (var d = -1, I = c == null ? 0 : c.length; ++d < I; )
        if (!g(c[d], d, c))
          return !1;
      return !0;
    }
    function bn(c, g) {
      for (var d = -1, I = c == null ? 0 : c.length, N = 0, j = []; ++d < I; ) {
        var pe = c[d];
        g(pe, d, c) && (j[N++] = pe);
      }
      return j;
    }
    function Xt(c, g) {
      var d = c == null ? 0 : c.length;
      return !!d && Xn(c, g, 0) > -1;
    }
    function ei(c, g, d) {
      for (var I = -1, N = c == null ? 0 : c.length; ++I < N; )
        if (d(g, c[I]))
          return !0;
      return !1;
    }
    function se(c, g) {
      for (var d = -1, I = c == null ? 0 : c.length, N = Array(I); ++d < I; )
        N[d] = g(c[d], d, c);
      return N;
    }
    function Cn(c, g) {
      for (var d = -1, I = g.length, N = c.length; ++d < I; )
        c[N + d] = g[d];
      return c;
    }
    function ni(c, g, d, I) {
      var N = -1, j = c == null ? 0 : c.length;
      for (I && j && (d = c[++N]); ++N < j; )
        d = g(d, c[N], N, c);
      return d;
    }
    function Tf(c, g, d, I) {
      var N = c == null ? 0 : c.length;
      for (I && N && (d = c[--N]); N--; )
        d = g(d, c[N], N, c);
      return d;
    }
    function ti(c, g) {
      for (var d = -1, I = c == null ? 0 : c.length; ++d < I; )
        if (g(c[d], d, c))
          return !0;
      return !1;
    }
    var Lf = ri("length");
    function If(c) {
      return c.split("");
    }
    function Rf(c) {
      return c.match(Mo) || [];
    }
    function il(c, g, d) {
      var I;
      return d(c, function(N, j, pe) {
        if (g(N, j, pe))
          return I = j, !1;
      }), I;
    }
    function qt(c, g, d, I) {
      for (var N = c.length, j = d + (I ? 1 : -1); I ? j-- : ++j < N; )
        if (g(c[j], j, c))
          return j;
      return -1;
    }
    function Xn(c, g, d) {
      return g === g ? Hf(c, g, d) : qt(c, ul, d);
    }
    function Ef(c, g, d, I) {
      for (var N = d - 1, j = c.length; ++N < j; )
        if (I(c[N], g))
          return N;
      return -1;
    }
    function ul(c) {
      return c !== c;
    }
    function ll(c, g) {
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
    function al(c, g, d, I, N) {
      return N(c, function(j, pe, ue) {
        d = I ? (I = !1, j) : g(d, j, pe, ue);
      }), d;
    }
    function Wf(c, g) {
      var d = c.length;
      for (c.sort(g); d--; )
        c[d] = c[d].value;
      return c;
    }
    function ui(c, g) {
      for (var d, I = -1, N = c.length; ++I < N; ) {
        var j = g(c[I]);
        j !== u && (d = d === u ? j : d + j);
      }
      return d;
    }
    function li(c, g) {
      for (var d = -1, I = Array(c); ++d < c; )
        I[d] = g(d);
      return I;
    }
    function Of(c, g) {
      return se(g, function(d) {
        return [d, c[d]];
      });
    }
    function ol(c) {
      return c && c.slice(0, hl(c) + 1).replace(Xr, "");
    }
    function Pe(c) {
      return function(g) {
        return c(g);
      };
    }
    function ai(c, g) {
      return se(g, function(d) {
        return c[d];
      });
    }
    function _t(c, g) {
      return c.has(g);
    }
    function fl(c, g) {
      for (var d = -1, I = c.length; ++d < I && Xn(g, c[d], 0) > -1; )
        ;
      return d;
    }
    function sl(c, g) {
      for (var d = c.length; d-- && Xn(g, c[d], 0) > -1; )
        ;
      return d;
    }
    function Bf(c, g) {
      for (var d = c.length, I = 0; d--; )
        c[d] === g && ++I;
      return I;
    }
    var $f = ii(pf), Nf = ii(mf);
    function Mf(c) {
      return "\\" + yf[c];
    }
    function Pf(c, g) {
      return c == null ? u : c[g];
    }
    function qn(c) {
      return df.test(c);
    }
    function Ff(c) {
      return gf.test(c);
    }
    function Df(c) {
      for (var g, d = []; !(g = c.next()).done; )
        d.push(g.value);
      return d;
    }
    function oi(c) {
      var g = -1, d = Array(c.size);
      return c.forEach(function(I, N) {
        d[++g] = [N, I];
      }), d;
    }
    function cl(c, g) {
      return function(d) {
        return c(g(d));
      };
    }
    function An(c, g) {
      for (var d = -1, I = c.length, N = 0, j = []; ++d < I; ) {
        var pe = c[d];
        (pe === g || pe === m) && (c[d] = m, j[N++] = d);
      }
      return j;
    }
    function Kt(c) {
      var g = -1, d = Array(c.size);
      return c.forEach(function(I) {
        d[++g] = I;
      }), d;
    }
    function Uf(c) {
      var g = -1, d = Array(c.size);
      return c.forEach(function(I) {
        d[++g] = [I, I];
      }), d;
    }
    function Hf(c, g, d) {
      for (var I = d - 1, N = c.length; ++I < N; )
        if (c[I] === g)
          return I;
      return -1;
    }
    function kf(c, g, d) {
      for (var I = d + 1; I--; )
        if (c[I] === g)
          return I;
      return I;
    }
    function Kn(c) {
      return qn(c) ? Gf(c) : Lf(c);
    }
    function en(c) {
      return qn(c) ? Yf(c) : If(c);
    }
    function hl(c) {
      for (var g = c.length; g-- && Oo.test(c.charAt(g)); )
        ;
      return g;
    }
    var zf = ii(wf);
    function Gf(c) {
      for (var g = Qr.lastIndex = 0; Qr.test(c); )
        ++g;
      return g;
    }
    function Yf(c) {
      return c.match(Qr) || [];
    }
    function Xf(c) {
      return c.match(hf) || [];
    }
    var qf = function c(g) {
      g = g == null ? be : Zn.defaults(be.Object(), g, Zn.pick(be, vf));
      var d = g.Array, I = g.Date, N = g.Error, j = g.Function, pe = g.Math, ue = g.Object, fi = g.RegExp, Kf = g.String, Ye = g.TypeError, Zt = d.prototype, Zf = j.prototype, Jn = ue.prototype, Jt = g["__core-js_shared__"], Qt = Zf.toString, re = Jn.hasOwnProperty, Jf = 0, dl = function() {
        var e = /[^.]+$/.exec(Jt && Jt.keys && Jt.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Vt = Jn.toString, Qf = Qt.call(ue), Vf = be._, jf = fi("^" + Qt.call(re).replace(Yr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), jt = Ju ? g.Buffer : u, Sn = g.Symbol, er = g.Uint8Array, gl = jt ? jt.allocUnsafe : u, nr = cl(ue.getPrototypeOf, ue), vl = ue.create, _l = Jn.propertyIsEnumerable, tr = Zt.splice, pl = Sn ? Sn.isConcatSpreadable : u, pt = Sn ? Sn.iterator : u, $n = Sn ? Sn.toStringTag : u, rr = function() {
        try {
          var e = Dn(ue, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), es = g.clearTimeout !== be.clearTimeout && g.clearTimeout, ns = I && I.now !== be.Date.now && I.now, ts = g.setTimeout !== be.setTimeout && g.setTimeout, ir = pe.ceil, ur = pe.floor, si = ue.getOwnPropertySymbols, rs = jt ? jt.isBuffer : u, ml = g.isFinite, is = Zt.join, us = cl(ue.keys, ue), me = pe.max, Te = pe.min, ls = I.now, as = g.parseInt, wl = pe.random, os = Zt.reverse, ci = Dn(g, "DataView"), mt = Dn(g, "Map"), hi = Dn(g, "Promise"), Qn = Dn(g, "Set"), wt = Dn(g, "WeakMap"), yt = Dn(ue, "create"), lr = wt && new wt(), Vn = {}, fs = Un(ci), ss = Un(mt), cs = Un(hi), hs = Un(Qn), ds = Un(wt), ar = Sn ? Sn.prototype : u, xt = ar ? ar.valueOf : u, yl = ar ? ar.toString : u;
      function l(e) {
        if (de(e) && !P(e) && !(e instanceof X)) {
          if (e instanceof Xe)
            return e;
          if (re.call(e, "__wrapped__"))
            return xa(e);
        }
        return new Xe(e);
      }
      var jn = function() {
        function e() {
        }
        return function(n) {
          if (!ce(n))
            return {};
          if (vl)
            return vl(n);
          e.prototype = n;
          var t = new e();
          return e.prototype = u, t;
        };
      }();
      function or() {
      }
      function Xe(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = u;
      }
      l.templateSettings = {
        escape: To,
        evaluate: Lo,
        interpolate: Ru,
        variable: "",
        imports: {
          _: l
        }
      }, l.prototype = or.prototype, l.prototype.constructor = l, Xe.prototype = jn(or.prototype), Xe.prototype.constructor = Xe;
      function X(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ln, this.__views__ = [];
      }
      function gs() {
        var e = new X(this.__wrapped__);
        return e.__actions__ = We(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = We(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = We(this.__views__), e;
      }
      function vs() {
        if (this.__filtered__) {
          var e = new X(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function _s() {
        var e = this.__wrapped__.value(), n = this.__dir__, t = P(e), r = n < 0, i = t ? e.length : 0, o = Ic(0, i, this.__views__), f = o.start, s = o.end, h = s - f, v = r ? s : f - 1, _ = this.__iteratees__, p = _.length, S = 0, E = Te(h, this.__takeCount__);
        if (!t || !r && i == h && E == h)
          return Gl(e, this.__actions__);
        var O = [];
        e:
          for (; h-- && S < E; ) {
            v += n;
            for (var H = -1, B = e[v]; ++H < p; ) {
              var Y = _[H], q = Y.iteratee, Ue = Y.type, Ee = q(B);
              if (Ue == oo)
                B = Ee;
              else if (!Ee) {
                if (Ue == ot)
                  continue e;
                break e;
              }
            }
            O[S++] = B;
          }
        return O;
      }
      X.prototype = jn(or.prototype), X.prototype.constructor = X;
      function Nn(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var r = e[n];
          this.set(r[0], r[1]);
        }
      }
      function ps() {
        this.__data__ = yt ? yt(null) : {}, this.size = 0;
      }
      function ms(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function ws(e) {
        var n = this.__data__;
        if (yt) {
          var t = n[e];
          return t === K ? u : t;
        }
        return re.call(n, e) ? n[e] : u;
      }
      function ys(e) {
        var n = this.__data__;
        return yt ? n[e] !== u : re.call(n, e);
      }
      function xs(e, n) {
        var t = this.__data__;
        return this.size += this.has(e) ? 0 : 1, t[e] = yt && n === u ? K : n, this;
      }
      Nn.prototype.clear = ps, Nn.prototype.delete = ms, Nn.prototype.get = ws, Nn.prototype.has = ys, Nn.prototype.set = xs;
      function cn(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var r = e[n];
          this.set(r[0], r[1]);
        }
      }
      function bs() {
        this.__data__ = [], this.size = 0;
      }
      function Cs(e) {
        var n = this.__data__, t = fr(n, e);
        if (t < 0)
          return !1;
        var r = n.length - 1;
        return t == r ? n.pop() : tr.call(n, t, 1), --this.size, !0;
      }
      function As(e) {
        var n = this.__data__, t = fr(n, e);
        return t < 0 ? u : n[t][1];
      }
      function Ss(e) {
        return fr(this.__data__, e) > -1;
      }
      function Ts(e, n) {
        var t = this.__data__, r = fr(t, e);
        return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
      }
      cn.prototype.clear = bs, cn.prototype.delete = Cs, cn.prototype.get = As, cn.prototype.has = Ss, cn.prototype.set = Ts;
      function hn(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var r = e[n];
          this.set(r[0], r[1]);
        }
      }
      function Ls() {
        this.size = 0, this.__data__ = {
          hash: new Nn(),
          map: new (mt || cn)(),
          string: new Nn()
        };
      }
      function Is(e) {
        var n = xr(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Rs(e) {
        return xr(this, e).get(e);
      }
      function Es(e) {
        return xr(this, e).has(e);
      }
      function Ws(e, n) {
        var t = xr(this, e), r = t.size;
        return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
      }
      hn.prototype.clear = Ls, hn.prototype.delete = Is, hn.prototype.get = Rs, hn.prototype.has = Es, hn.prototype.set = Ws;
      function Mn(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.__data__ = new hn(); ++n < t; )
          this.add(e[n]);
      }
      function Os(e) {
        return this.__data__.set(e, K), this;
      }
      function Bs(e) {
        return this.__data__.has(e);
      }
      Mn.prototype.add = Mn.prototype.push = Os, Mn.prototype.has = Bs;
      function nn(e) {
        var n = this.__data__ = new cn(e);
        this.size = n.size;
      }
      function $s() {
        this.__data__ = new cn(), this.size = 0;
      }
      function Ns(e) {
        var n = this.__data__, t = n.delete(e);
        return this.size = n.size, t;
      }
      function Ms(e) {
        return this.__data__.get(e);
      }
      function Ps(e) {
        return this.__data__.has(e);
      }
      function Fs(e, n) {
        var t = this.__data__;
        if (t instanceof cn) {
          var r = t.__data__;
          if (!mt || r.length < A - 1)
            return r.push([e, n]), this.size = ++t.size, this;
          t = this.__data__ = new hn(r);
        }
        return t.set(e, n), this.size = t.size, this;
      }
      nn.prototype.clear = $s, nn.prototype.delete = Ns, nn.prototype.get = Ms, nn.prototype.has = Ps, nn.prototype.set = Fs;
      function xl(e, n) {
        var t = P(e), r = !t && Hn(e), i = !t && !r && En(e), o = !t && !r && !i && rt(e), f = t || r || i || o, s = f ? li(e.length, Kf) : [], h = s.length;
        for (var v in e)
          (n || re.call(e, v)) && !(f && (v == "length" || i && (v == "offset" || v == "parent") || o && (v == "buffer" || v == "byteLength" || v == "byteOffset") || _n(v, h))) && s.push(v);
        return s;
      }
      function bl(e) {
        var n = e.length;
        return n ? e[Ci(0, n - 1)] : u;
      }
      function Ds(e, n) {
        return br(We(e), Pn(n, 0, e.length));
      }
      function Us(e) {
        return br(We(e));
      }
      function di(e, n, t) {
        (t !== u && !tn(e[n], t) || t === u && !(n in e)) && dn(e, n, t);
      }
      function bt(e, n, t) {
        var r = e[n];
        (!(re.call(e, n) && tn(r, t)) || t === u && !(n in e)) && dn(e, n, t);
      }
      function fr(e, n) {
        for (var t = e.length; t--; )
          if (tn(e[t][0], n))
            return t;
        return -1;
      }
      function Hs(e, n, t, r) {
        return Tn(e, function(i, o, f) {
          n(r, i, t(i), f);
        }), r;
      }
      function Cl(e, n) {
        return e && on(n, we(n), e);
      }
      function ks(e, n) {
        return e && on(n, Be(n), e);
      }
      function dn(e, n, t) {
        n == "__proto__" && rr ? rr(e, n, {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        }) : e[n] = t;
      }
      function gi(e, n) {
        for (var t = -1, r = n.length, i = d(r), o = e == null; ++t < r; )
          i[t] = o ? u : Ki(e, n[t]);
        return i;
      }
      function Pn(e, n, t) {
        return e === e && (t !== u && (e = e <= t ? e : t), n !== u && (e = e >= n ? e : n)), e;
      }
      function qe(e, n, t, r, i, o) {
        var f, s = n & R, h = n & G, v = n & Z;
        if (t && (f = i ? t(e, r, i, o) : t(e)), f !== u)
          return f;
        if (!ce(e))
          return e;
        var _ = P(e);
        if (_) {
          if (f = Ec(e), !s)
            return We(e, f);
        } else {
          var p = Le(e), S = p == Ht || p == Su;
          if (En(e))
            return ql(e, s);
          if (p == sn || p == zn || S && !i) {
            if (f = h || S ? {} : ha(e), !s)
              return h ? wc(e, ks(f, e)) : mc(e, Cl(f, e));
          } else {
            if (!le[p])
              return i ? e : {};
            f = Wc(e, p, s);
          }
        }
        o || (o = new nn());
        var E = o.get(e);
        if (E)
          return E;
        o.set(e, f), Ha(e) ? e.forEach(function(B) {
          f.add(qe(B, n, t, B, e, o));
        }) : Da(e) && e.forEach(function(B, Y) {
          f.set(Y, qe(B, n, t, Y, e, o));
        });
        var O = v ? h ? $i : Bi : h ? Be : we, H = _ ? u : O(e);
        return Ge(H || e, function(B, Y) {
          H && (Y = B, B = e[Y]), bt(f, Y, qe(B, n, t, Y, e, o));
        }), f;
      }
      function zs(e) {
        var n = we(e);
        return function(t) {
          return Al(t, e, n);
        };
      }
      function Al(e, n, t) {
        var r = t.length;
        if (e == null)
          return !r;
        for (e = ue(e); r--; ) {
          var i = t[r], o = n[i], f = e[i];
          if (f === u && !(i in e) || !o(f))
            return !1;
        }
        return !0;
      }
      function Sl(e, n, t) {
        if (typeof e != "function")
          throw new Ye(b);
        return Rt(function() {
          e.apply(u, t);
        }, n);
      }
      function Ct(e, n, t, r) {
        var i = -1, o = Xt, f = !0, s = e.length, h = [], v = n.length;
        if (!s)
          return h;
        t && (n = se(n, Pe(t))), r ? (o = ei, f = !1) : n.length >= A && (o = _t, f = !1, n = new Mn(n));
        e:
          for (; ++i < s; ) {
            var _ = e[i], p = t == null ? _ : t(_);
            if (_ = r || _ !== 0 ? _ : 0, f && p === p) {
              for (var S = v; S--; )
                if (n[S] === p)
                  continue e;
              h.push(_);
            } else
              o(n, p, r) || h.push(_);
          }
        return h;
      }
      var Tn = Vl(an), Tl = Vl(_i, !0);
      function Gs(e, n) {
        var t = !0;
        return Tn(e, function(r, i, o) {
          return t = !!n(r, i, o), t;
        }), t;
      }
      function sr(e, n, t) {
        for (var r = -1, i = e.length; ++r < i; ) {
          var o = e[r], f = n(o);
          if (f != null && (s === u ? f === f && !De(f) : t(f, s)))
            var s = f, h = o;
        }
        return h;
      }
      function Ys(e, n, t, r) {
        var i = e.length;
        for (t = D(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === u || r > i ? i : D(r), r < 0 && (r += i), r = t > r ? 0 : za(r); t < r; )
          e[t++] = n;
        return e;
      }
      function Ll(e, n) {
        var t = [];
        return Tn(e, function(r, i, o) {
          n(r, i, o) && t.push(r);
        }), t;
      }
      function Ce(e, n, t, r, i) {
        var o = -1, f = e.length;
        for (t || (t = Bc), i || (i = []); ++o < f; ) {
          var s = e[o];
          n > 0 && t(s) ? n > 1 ? Ce(s, n - 1, t, r, i) : Cn(i, s) : r || (i[i.length] = s);
        }
        return i;
      }
      var vi = jl(), Il = jl(!0);
      function an(e, n) {
        return e && vi(e, n, we);
      }
      function _i(e, n) {
        return e && Il(e, n, we);
      }
      function cr(e, n) {
        return bn(n, function(t) {
          return pn(e[t]);
        });
      }
      function Fn(e, n) {
        n = In(n, e);
        for (var t = 0, r = n.length; e != null && t < r; )
          e = e[fn(n[t++])];
        return t && t == r ? e : u;
      }
      function Rl(e, n, t) {
        var r = n(e);
        return P(e) ? r : Cn(r, t(e));
      }
      function Ie(e) {
        return e == null ? e === u ? wo : po : $n && $n in ue(e) ? Lc(e) : Uc(e);
      }
      function pi(e, n) {
        return e > n;
      }
      function Xs(e, n) {
        return e != null && re.call(e, n);
      }
      function qs(e, n) {
        return e != null && n in ue(e);
      }
      function Ks(e, n, t) {
        return e >= Te(n, t) && e < me(n, t);
      }
      function mi(e, n, t) {
        for (var r = t ? ei : Xt, i = e[0].length, o = e.length, f = o, s = d(o), h = 1 / 0, v = []; f--; ) {
          var _ = e[f];
          f && n && (_ = se(_, Pe(n))), h = Te(_.length, h), s[f] = !t && (n || i >= 120 && _.length >= 120) ? new Mn(f && _) : u;
        }
        _ = e[0];
        var p = -1, S = s[0];
        e:
          for (; ++p < i && v.length < h; ) {
            var E = _[p], O = n ? n(E) : E;
            if (E = t || E !== 0 ? E : 0, !(S ? _t(S, O) : r(v, O, t))) {
              for (f = o; --f; ) {
                var H = s[f];
                if (!(H ? _t(H, O) : r(e[f], O, t)))
                  continue e;
              }
              S && S.push(O), v.push(E);
            }
          }
        return v;
      }
      function Zs(e, n, t, r) {
        return an(e, function(i, o, f) {
          n(r, t(i), o, f);
        }), r;
      }
      function At(e, n, t) {
        n = In(n, e), e = _a(e, n);
        var r = e == null ? e : e[fn(Ze(n))];
        return r == null ? u : Me(r, e, t);
      }
      function El(e) {
        return de(e) && Ie(e) == zn;
      }
      function Js(e) {
        return de(e) && Ie(e) == vt;
      }
      function Qs(e) {
        return de(e) && Ie(e) == st;
      }
      function St(e, n, t, r, i) {
        return e === n ? !0 : e == null || n == null || !de(e) && !de(n) ? e !== e && n !== n : Vs(e, n, t, r, St, i);
      }
      function Vs(e, n, t, r, i, o) {
        var f = P(e), s = P(n), h = f ? Dt : Le(e), v = s ? Dt : Le(n);
        h = h == zn ? sn : h, v = v == zn ? sn : v;
        var _ = h == sn, p = v == sn, S = h == v;
        if (S && En(e)) {
          if (!En(n))
            return !1;
          f = !0, _ = !1;
        }
        if (S && !_)
          return o || (o = new nn()), f || rt(e) ? fa(e, n, t, r, i, o) : Sc(e, n, h, t, r, i, o);
        if (!(t & te)) {
          var E = _ && re.call(e, "__wrapped__"), O = p && re.call(n, "__wrapped__");
          if (E || O) {
            var H = E ? e.value() : e, B = O ? n.value() : n;
            return o || (o = new nn()), i(H, B, t, r, o);
          }
        }
        return S ? (o || (o = new nn()), Tc(e, n, t, r, i, o)) : !1;
      }
      function js(e) {
        return de(e) && Le(e) == Ve;
      }
      function wi(e, n, t, r) {
        var i = t.length, o = i, f = !r;
        if (e == null)
          return !o;
        for (e = ue(e); i--; ) {
          var s = t[i];
          if (f && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
            return !1;
        }
        for (; ++i < o; ) {
          s = t[i];
          var h = s[0], v = e[h], _ = s[1];
          if (f && s[2]) {
            if (v === u && !(h in e))
              return !1;
          } else {
            var p = new nn();
            if (r)
              var S = r(v, _, h, e, n, p);
            if (!(S === u ? St(_, v, te | he, r, p) : S))
              return !1;
          }
        }
        return !0;
      }
      function Wl(e) {
        if (!ce(e) || Nc(e))
          return !1;
        var n = pn(e) ? jf : ko;
        return n.test(Un(e));
      }
      function ec(e) {
        return de(e) && Ie(e) == ht;
      }
      function nc(e) {
        return de(e) && Le(e) == je;
      }
      function tc(e) {
        return de(e) && Ir(e.length) && !!ae[Ie(e)];
      }
      function Ol(e) {
        return typeof e == "function" ? e : e == null ? $e : typeof e == "object" ? P(e) ? Nl(e[0], e[1]) : $l(e) : eo(e);
      }
      function yi(e) {
        if (!It(e))
          return us(e);
        var n = [];
        for (var t in ue(e))
          re.call(e, t) && t != "constructor" && n.push(t);
        return n;
      }
      function rc(e) {
        if (!ce(e))
          return Dc(e);
        var n = It(e), t = [];
        for (var r in e)
          r == "constructor" && (n || !re.call(e, r)) || t.push(r);
        return t;
      }
      function xi(e, n) {
        return e < n;
      }
      function Bl(e, n) {
        var t = -1, r = Oe(e) ? d(e.length) : [];
        return Tn(e, function(i, o, f) {
          r[++t] = n(i, o, f);
        }), r;
      }
      function $l(e) {
        var n = Mi(e);
        return n.length == 1 && n[0][2] ? ga(n[0][0], n[0][1]) : function(t) {
          return t === e || wi(t, e, n);
        };
      }
      function Nl(e, n) {
        return Fi(e) && da(n) ? ga(fn(e), n) : function(t) {
          var r = Ki(t, e);
          return r === u && r === n ? Zi(t, e) : St(n, r, te | he);
        };
      }
      function hr(e, n, t, r, i) {
        e !== n && vi(n, function(o, f) {
          if (i || (i = new nn()), ce(o))
            ic(e, n, f, t, hr, r, i);
          else {
            var s = r ? r(Ui(e, f), o, f + "", e, n, i) : u;
            s === u && (s = o), di(e, f, s);
          }
        }, Be);
      }
      function ic(e, n, t, r, i, o, f) {
        var s = Ui(e, t), h = Ui(n, t), v = f.get(h);
        if (v) {
          di(e, t, v);
          return;
        }
        var _ = o ? o(s, h, t + "", e, n, f) : u, p = _ === u;
        if (p) {
          var S = P(h), E = !S && En(h), O = !S && !E && rt(h);
          _ = h, S || E || O ? P(s) ? _ = s : ve(s) ? _ = We(s) : E ? (p = !1, _ = ql(h, !0)) : O ? (p = !1, _ = Kl(h, !0)) : _ = [] : Et(h) || Hn(h) ? (_ = s, Hn(s) ? _ = Ga(s) : (!ce(s) || pn(s)) && (_ = ha(h))) : p = !1;
        }
        p && (f.set(h, _), i(_, h, r, o, f), f.delete(h)), di(e, t, _);
      }
      function Ml(e, n) {
        var t = e.length;
        if (!!t)
          return n += n < 0 ? t : 0, _n(n, t) ? e[n] : u;
      }
      function Pl(e, n, t) {
        n.length ? n = se(n, function(o) {
          return P(o) ? function(f) {
            return Fn(f, o.length === 1 ? o[0] : o);
          } : o;
        }) : n = [$e];
        var r = -1;
        n = se(n, Pe(W()));
        var i = Bl(e, function(o, f, s) {
          var h = se(n, function(v) {
            return v(o);
          });
          return { criteria: h, index: ++r, value: o };
        });
        return Wf(i, function(o, f) {
          return pc(o, f, t);
        });
      }
      function uc(e, n) {
        return Fl(e, n, function(t, r) {
          return Zi(e, r);
        });
      }
      function Fl(e, n, t) {
        for (var r = -1, i = n.length, o = {}; ++r < i; ) {
          var f = n[r], s = Fn(e, f);
          t(s, f) && Tt(o, In(f, e), s);
        }
        return o;
      }
      function lc(e) {
        return function(n) {
          return Fn(n, e);
        };
      }
      function bi(e, n, t, r) {
        var i = r ? Ef : Xn, o = -1, f = n.length, s = e;
        for (e === n && (n = We(n)), t && (s = se(e, Pe(t))); ++o < f; )
          for (var h = 0, v = n[o], _ = t ? t(v) : v; (h = i(s, _, h, r)) > -1; )
            s !== e && tr.call(s, h, 1), tr.call(e, h, 1);
        return e;
      }
      function Dl(e, n) {
        for (var t = e ? n.length : 0, r = t - 1; t--; ) {
          var i = n[t];
          if (t == r || i !== o) {
            var o = i;
            _n(i) ? tr.call(e, i, 1) : Ti(e, i);
          }
        }
        return e;
      }
      function Ci(e, n) {
        return e + ur(wl() * (n - e + 1));
      }
      function ac(e, n, t, r) {
        for (var i = -1, o = me(ir((n - e) / (t || 1)), 0), f = d(o); o--; )
          f[r ? o : ++i] = e, e += t;
        return f;
      }
      function Ai(e, n) {
        var t = "";
        if (!e || n < 1 || n > xn)
          return t;
        do
          n % 2 && (t += e), n = ur(n / 2), n && (e += e);
        while (n);
        return t;
      }
      function z(e, n) {
        return Hi(va(e, n, $e), e + "");
      }
      function oc(e) {
        return bl(it(e));
      }
      function fc(e, n) {
        var t = it(e);
        return br(t, Pn(n, 0, t.length));
      }
      function Tt(e, n, t, r) {
        if (!ce(e))
          return e;
        n = In(n, e);
        for (var i = -1, o = n.length, f = o - 1, s = e; s != null && ++i < o; ) {
          var h = fn(n[i]), v = t;
          if (h === "__proto__" || h === "constructor" || h === "prototype")
            return e;
          if (i != f) {
            var _ = s[h];
            v = r ? r(_, h, s) : u, v === u && (v = ce(_) ? _ : _n(n[i + 1]) ? [] : {});
          }
          bt(s, h, v), s = s[h];
        }
        return e;
      }
      var Ul = lr ? function(e, n) {
        return lr.set(e, n), e;
      } : $e, sc = rr ? function(e, n) {
        return rr(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Qi(n),
          writable: !0
        });
      } : $e;
      function cc(e) {
        return br(it(e));
      }
      function Ke(e, n, t) {
        var r = -1, i = e.length;
        n < 0 && (n = -n > i ? 0 : i + n), t = t > i ? i : t, t < 0 && (t += i), i = n > t ? 0 : t - n >>> 0, n >>>= 0;
        for (var o = d(i); ++r < i; )
          o[r] = e[r + n];
        return o;
      }
      function hc(e, n) {
        var t;
        return Tn(e, function(r, i, o) {
          return t = n(r, i, o), !t;
        }), !!t;
      }
      function dr(e, n, t) {
        var r = 0, i = e == null ? r : e.length;
        if (typeof n == "number" && n === n && i <= ho) {
          for (; r < i; ) {
            var o = r + i >>> 1, f = e[o];
            f !== null && !De(f) && (t ? f <= n : f < n) ? r = o + 1 : i = o;
          }
          return i;
        }
        return Si(e, n, $e, t);
      }
      function Si(e, n, t, r) {
        var i = 0, o = e == null ? 0 : e.length;
        if (o === 0)
          return 0;
        n = t(n);
        for (var f = n !== n, s = n === null, h = De(n), v = n === u; i < o; ) {
          var _ = ur((i + o) / 2), p = t(e[_]), S = p !== u, E = p === null, O = p === p, H = De(p);
          if (f)
            var B = r || O;
          else
            v ? B = O && (r || S) : s ? B = O && S && (r || !E) : h ? B = O && S && !E && (r || !H) : E || H ? B = !1 : B = r ? p <= n : p < n;
          B ? i = _ + 1 : o = _;
        }
        return Te(o, co);
      }
      function Hl(e, n) {
        for (var t = -1, r = e.length, i = 0, o = []; ++t < r; ) {
          var f = e[t], s = n ? n(f) : f;
          if (!t || !tn(s, h)) {
            var h = s;
            o[i++] = f === 0 ? 0 : f;
          }
        }
        return o;
      }
      function kl(e) {
        return typeof e == "number" ? e : De(e) ? Ft : +e;
      }
      function Fe(e) {
        if (typeof e == "string")
          return e;
        if (P(e))
          return se(e, Fe) + "";
        if (De(e))
          return yl ? yl.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -On ? "-0" : n;
      }
      function Ln(e, n, t) {
        var r = -1, i = Xt, o = e.length, f = !0, s = [], h = s;
        if (t)
          f = !1, i = ei;
        else if (o >= A) {
          var v = n ? null : Cc(e);
          if (v)
            return Kt(v);
          f = !1, i = _t, h = new Mn();
        } else
          h = n ? [] : s;
        e:
          for (; ++r < o; ) {
            var _ = e[r], p = n ? n(_) : _;
            if (_ = t || _ !== 0 ? _ : 0, f && p === p) {
              for (var S = h.length; S--; )
                if (h[S] === p)
                  continue e;
              n && h.push(p), s.push(_);
            } else
              i(h, p, t) || (h !== s && h.push(p), s.push(_));
          }
        return s;
      }
      function Ti(e, n) {
        return n = In(n, e), e = _a(e, n), e == null || delete e[fn(Ze(n))];
      }
      function zl(e, n, t, r) {
        return Tt(e, n, t(Fn(e, n)), r);
      }
      function gr(e, n, t, r) {
        for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && n(e[o], o, e); )
          ;
        return t ? Ke(e, r ? 0 : o, r ? o + 1 : i) : Ke(e, r ? o + 1 : 0, r ? i : o);
      }
      function Gl(e, n) {
        var t = e;
        return t instanceof X && (t = t.value()), ni(n, function(r, i) {
          return i.func.apply(i.thisArg, Cn([r], i.args));
        }, t);
      }
      function Li(e, n, t) {
        var r = e.length;
        if (r < 2)
          return r ? Ln(e[0]) : [];
        for (var i = -1, o = d(r); ++i < r; )
          for (var f = e[i], s = -1; ++s < r; )
            s != i && (o[i] = Ct(o[i] || f, e[s], n, t));
        return Ln(Ce(o, 1), n, t);
      }
      function Yl(e, n, t) {
        for (var r = -1, i = e.length, o = n.length, f = {}; ++r < i; ) {
          var s = r < o ? n[r] : u;
          t(f, e[r], s);
        }
        return f;
      }
      function Ii(e) {
        return ve(e) ? e : [];
      }
      function Ri(e) {
        return typeof e == "function" ? e : $e;
      }
      function In(e, n) {
        return P(e) ? e : Fi(e, n) ? [e] : ya(ne(e));
      }
      var dc = z;
      function Rn(e, n, t) {
        var r = e.length;
        return t = t === u ? r : t, !n && t >= r ? e : Ke(e, n, t);
      }
      var Xl = es || function(e) {
        return be.clearTimeout(e);
      };
      function ql(e, n) {
        if (n)
          return e.slice();
        var t = e.length, r = gl ? gl(t) : new e.constructor(t);
        return e.copy(r), r;
      }
      function Ei(e) {
        var n = new e.constructor(e.byteLength);
        return new er(n).set(new er(e)), n;
      }
      function gc(e, n) {
        var t = n ? Ei(e.buffer) : e.buffer;
        return new e.constructor(t, e.byteOffset, e.byteLength);
      }
      function vc(e) {
        var n = new e.constructor(e.source, Eu.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function _c(e) {
        return xt ? ue(xt.call(e)) : {};
      }
      function Kl(e, n) {
        var t = n ? Ei(e.buffer) : e.buffer;
        return new e.constructor(t, e.byteOffset, e.length);
      }
      function Zl(e, n) {
        if (e !== n) {
          var t = e !== u, r = e === null, i = e === e, o = De(e), f = n !== u, s = n === null, h = n === n, v = De(n);
          if (!s && !v && !o && e > n || o && f && h && !s && !v || r && f && h || !t && h || !i)
            return 1;
          if (!r && !o && !v && e < n || v && t && i && !r && !o || s && t && i || !f && i || !h)
            return -1;
        }
        return 0;
      }
      function pc(e, n, t) {
        for (var r = -1, i = e.criteria, o = n.criteria, f = i.length, s = t.length; ++r < f; ) {
          var h = Zl(i[r], o[r]);
          if (h) {
            if (r >= s)
              return h;
            var v = t[r];
            return h * (v == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Jl(e, n, t, r) {
        for (var i = -1, o = e.length, f = t.length, s = -1, h = n.length, v = me(o - f, 0), _ = d(h + v), p = !r; ++s < h; )
          _[s] = n[s];
        for (; ++i < f; )
          (p || i < o) && (_[t[i]] = e[i]);
        for (; v--; )
          _[s++] = e[i++];
        return _;
      }
      function Ql(e, n, t, r) {
        for (var i = -1, o = e.length, f = -1, s = t.length, h = -1, v = n.length, _ = me(o - s, 0), p = d(_ + v), S = !r; ++i < _; )
          p[i] = e[i];
        for (var E = i; ++h < v; )
          p[E + h] = n[h];
        for (; ++f < s; )
          (S || i < o) && (p[E + t[f]] = e[i++]);
        return p;
      }
      function We(e, n) {
        var t = -1, r = e.length;
        for (n || (n = d(r)); ++t < r; )
          n[t] = e[t];
        return n;
      }
      function on(e, n, t, r) {
        var i = !t;
        t || (t = {});
        for (var o = -1, f = n.length; ++o < f; ) {
          var s = n[o], h = r ? r(t[s], e[s], s, t, e) : u;
          h === u && (h = e[s]), i ? dn(t, s, h) : bt(t, s, h);
        }
        return t;
      }
      function mc(e, n) {
        return on(e, Pi(e), n);
      }
      function wc(e, n) {
        return on(e, sa(e), n);
      }
      function vr(e, n) {
        return function(t, r) {
          var i = P(t) ? Af : Hs, o = n ? n() : {};
          return i(t, e, W(r, 2), o);
        };
      }
      function et(e) {
        return z(function(n, t) {
          var r = -1, i = t.length, o = i > 1 ? t[i - 1] : u, f = i > 2 ? t[2] : u;
          for (o = e.length > 3 && typeof o == "function" ? (i--, o) : u, f && Re(t[0], t[1], f) && (o = i < 3 ? u : o, i = 1), n = ue(n); ++r < i; ) {
            var s = t[r];
            s && e(n, s, r, o);
          }
          return n;
        });
      }
      function Vl(e, n) {
        return function(t, r) {
          if (t == null)
            return t;
          if (!Oe(t))
            return e(t, r);
          for (var i = t.length, o = n ? i : -1, f = ue(t); (n ? o-- : ++o < i) && r(f[o], o, f) !== !1; )
            ;
          return t;
        };
      }
      function jl(e) {
        return function(n, t, r) {
          for (var i = -1, o = ue(n), f = r(n), s = f.length; s--; ) {
            var h = f[e ? s : ++i];
            if (t(o[h], h, o) === !1)
              break;
          }
          return n;
        };
      }
      function yc(e, n, t) {
        var r = n & ee, i = Lt(e);
        function o() {
          var f = this && this !== be && this instanceof o ? i : e;
          return f.apply(r ? t : this, arguments);
        }
        return o;
      }
      function ea(e) {
        return function(n) {
          n = ne(n);
          var t = qn(n) ? en(n) : u, r = t ? t[0] : n.charAt(0), i = t ? Rn(t, 1).join("") : n.slice(1);
          return r[e]() + i;
        };
      }
      function nt(e) {
        return function(n) {
          return ni(Va(Qa(n).replace(sf, "")), e, "");
        };
      }
      function Lt(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var t = jn(e.prototype), r = e.apply(t, n);
          return ce(r) ? r : t;
        };
      }
      function xc(e, n, t) {
        var r = Lt(e);
        function i() {
          for (var o = arguments.length, f = d(o), s = o, h = tt(i); s--; )
            f[s] = arguments[s];
          var v = o < 3 && f[0] !== h && f[o - 1] !== h ? [] : An(f, h);
          if (o -= v.length, o < t)
            return ua(e, n, _r, i.placeholder, u, f, v, u, u, t - o);
          var _ = this && this !== be && this instanceof i ? r : e;
          return Me(_, this, f);
        }
        return i;
      }
      function na(e) {
        return function(n, t, r) {
          var i = ue(n);
          if (!Oe(n)) {
            var o = W(t, 3);
            n = we(n), t = function(s) {
              return o(i[s], s, i);
            };
          }
          var f = e(n, t, r);
          return f > -1 ? i[o ? n[f] : f] : u;
        };
      }
      function ta(e) {
        return vn(function(n) {
          var t = n.length, r = t, i = Xe.prototype.thru;
          for (e && n.reverse(); r--; ) {
            var o = n[r];
            if (typeof o != "function")
              throw new Ye(b);
            if (i && !f && yr(o) == "wrapper")
              var f = new Xe([], !0);
          }
          for (r = f ? r : t; ++r < t; ) {
            o = n[r];
            var s = yr(o), h = s == "wrapper" ? Ni(o) : u;
            h && Di(h[0]) && h[1] == (V | $ | C | Se) && !h[4].length && h[9] == 1 ? f = f[yr(h[0])].apply(f, h[3]) : f = o.length == 1 && Di(o) ? f[s]() : f.thru(o);
          }
          return function() {
            var v = arguments, _ = v[0];
            if (f && v.length == 1 && P(_))
              return f.plant(_).value();
            for (var p = 0, S = t ? n[p].apply(this, v) : _; ++p < t; )
              S = n[p].call(this, S);
            return S;
          };
        });
      }
      function _r(e, n, t, r, i, o, f, s, h, v) {
        var _ = n & V, p = n & ee, S = n & xe, E = n & ($ | J), O = n & Ne, H = S ? u : Lt(e);
        function B() {
          for (var Y = arguments.length, q = d(Y), Ue = Y; Ue--; )
            q[Ue] = arguments[Ue];
          if (E)
            var Ee = tt(B), He = Bf(q, Ee);
          if (r && (q = Jl(q, r, i, E)), o && (q = Ql(q, o, f, E)), Y -= He, E && Y < v) {
            var _e = An(q, Ee);
            return ua(e, n, _r, B.placeholder, t, q, _e, s, h, v - Y);
          }
          var rn = p ? t : this, wn = S ? rn[e] : e;
          return Y = q.length, s ? q = Hc(q, s) : O && Y > 1 && q.reverse(), _ && h < Y && (q.length = h), this && this !== be && this instanceof B && (wn = H || Lt(wn)), wn.apply(rn, q);
        }
        return B;
      }
      function ra(e, n) {
        return function(t, r) {
          return Zs(t, e, n(r), {});
        };
      }
      function pr(e, n) {
        return function(t, r) {
          var i;
          if (t === u && r === u)
            return n;
          if (t !== u && (i = t), r !== u) {
            if (i === u)
              return r;
            typeof t == "string" || typeof r == "string" ? (t = Fe(t), r = Fe(r)) : (t = kl(t), r = kl(r)), i = e(t, r);
          }
          return i;
        };
      }
      function Wi(e) {
        return vn(function(n) {
          return n = se(n, Pe(W())), z(function(t) {
            var r = this;
            return e(n, function(i) {
              return Me(i, r, t);
            });
          });
        });
      }
      function mr(e, n) {
        n = n === u ? " " : Fe(n);
        var t = n.length;
        if (t < 2)
          return t ? Ai(n, e) : n;
        var r = Ai(n, ir(e / Kn(n)));
        return qn(n) ? Rn(en(r), 0, e).join("") : r.slice(0, e);
      }
      function bc(e, n, t, r) {
        var i = n & ee, o = Lt(e);
        function f() {
          for (var s = -1, h = arguments.length, v = -1, _ = r.length, p = d(_ + h), S = this && this !== be && this instanceof f ? o : e; ++v < _; )
            p[v] = r[v];
          for (; h--; )
            p[v++] = arguments[++s];
          return Me(S, i ? t : this, p);
        }
        return f;
      }
      function ia(e) {
        return function(n, t, r) {
          return r && typeof r != "number" && Re(n, t, r) && (t = r = u), n = mn(n), t === u ? (t = n, n = 0) : t = mn(t), r = r === u ? n < t ? 1 : -1 : mn(r), ac(n, t, r, e);
        };
      }
      function wr(e) {
        return function(n, t) {
          return typeof n == "string" && typeof t == "string" || (n = Je(n), t = Je(t)), e(n, t);
        };
      }
      function ua(e, n, t, r, i, o, f, s, h, v) {
        var _ = n & $, p = _ ? f : u, S = _ ? u : f, E = _ ? o : u, O = _ ? u : o;
        n |= _ ? C : U, n &= ~(_ ? U : C), n & ke || (n &= ~(ee | xe));
        var H = [
          e,
          n,
          i,
          E,
          p,
          O,
          S,
          s,
          h,
          v
        ], B = t.apply(u, H);
        return Di(e) && pa(B, H), B.placeholder = r, ma(B, e, n);
      }
      function Oi(e) {
        var n = pe[e];
        return function(t, r) {
          if (t = Je(t), r = r == null ? 0 : Te(D(r), 292), r && ml(t)) {
            var i = (ne(t) + "e").split("e"), o = n(i[0] + "e" + (+i[1] + r));
            return i = (ne(o) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return n(t);
        };
      }
      var Cc = Qn && 1 / Kt(new Qn([, -0]))[1] == On ? function(e) {
        return new Qn(e);
      } : eu;
      function la(e) {
        return function(n) {
          var t = Le(n);
          return t == Ve ? oi(n) : t == je ? Uf(n) : Of(n, e(n));
        };
      }
      function gn(e, n, t, r, i, o, f, s) {
        var h = n & xe;
        if (!h && typeof e != "function")
          throw new Ye(b);
        var v = r ? r.length : 0;
        if (v || (n &= ~(C | U), r = i = u), f = f === u ? f : me(D(f), 0), s = s === u ? s : D(s), v -= i ? i.length : 0, n & U) {
          var _ = r, p = i;
          r = i = u;
        }
        var S = h ? u : Ni(e), E = [
          e,
          n,
          t,
          r,
          i,
          _,
          p,
          o,
          f,
          s
        ];
        if (S && Fc(E, S), e = E[0], n = E[1], t = E[2], r = E[3], i = E[4], s = E[9] = E[9] === u ? h ? 0 : e.length : me(E[9] - v, 0), !s && n & ($ | J) && (n &= ~($ | J)), !n || n == ee)
          var O = yc(e, n, t);
        else
          n == $ || n == J ? O = xc(e, n, s) : (n == C || n == (ee | C)) && !i.length ? O = bc(e, n, t, r) : O = _r.apply(u, E);
        var H = S ? Ul : pa;
        return ma(H(O, E), e, n);
      }
      function aa(e, n, t, r) {
        return e === u || tn(e, Jn[t]) && !re.call(r, t) ? n : e;
      }
      function oa(e, n, t, r, i, o) {
        return ce(e) && ce(n) && (o.set(n, e), hr(e, n, u, oa, o), o.delete(n)), e;
      }
      function Ac(e) {
        return Et(e) ? u : e;
      }
      function fa(e, n, t, r, i, o) {
        var f = t & te, s = e.length, h = n.length;
        if (s != h && !(f && h > s))
          return !1;
        var v = o.get(e), _ = o.get(n);
        if (v && _)
          return v == n && _ == e;
        var p = -1, S = !0, E = t & he ? new Mn() : u;
        for (o.set(e, n), o.set(n, e); ++p < s; ) {
          var O = e[p], H = n[p];
          if (r)
            var B = f ? r(H, O, p, n, e, o) : r(O, H, p, e, n, o);
          if (B !== u) {
            if (B)
              continue;
            S = !1;
            break;
          }
          if (E) {
            if (!ti(n, function(Y, q) {
              if (!_t(E, q) && (O === Y || i(O, Y, t, r, o)))
                return E.push(q);
            })) {
              S = !1;
              break;
            }
          } else if (!(O === H || i(O, H, t, r, o))) {
            S = !1;
            break;
          }
        }
        return o.delete(e), o.delete(n), S;
      }
      function Sc(e, n, t, r, i, o, f) {
        switch (t) {
          case Gn:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case vt:
            return !(e.byteLength != n.byteLength || !o(new er(e), new er(n)));
          case ft:
          case st:
          case ct:
            return tn(+e, +n);
          case Ut:
            return e.name == n.name && e.message == n.message;
          case ht:
          case dt:
            return e == n + "";
          case Ve:
            var s = oi;
          case je:
            var h = r & te;
            if (s || (s = Kt), e.size != n.size && !h)
              return !1;
            var v = f.get(e);
            if (v)
              return v == n;
            r |= he, f.set(e, n);
            var _ = fa(s(e), s(n), r, i, o, f);
            return f.delete(e), _;
          case kt:
            if (xt)
              return xt.call(e) == xt.call(n);
        }
        return !1;
      }
      function Tc(e, n, t, r, i, o) {
        var f = t & te, s = Bi(e), h = s.length, v = Bi(n), _ = v.length;
        if (h != _ && !f)
          return !1;
        for (var p = h; p--; ) {
          var S = s[p];
          if (!(f ? S in n : re.call(n, S)))
            return !1;
        }
        var E = o.get(e), O = o.get(n);
        if (E && O)
          return E == n && O == e;
        var H = !0;
        o.set(e, n), o.set(n, e);
        for (var B = f; ++p < h; ) {
          S = s[p];
          var Y = e[S], q = n[S];
          if (r)
            var Ue = f ? r(q, Y, S, n, e, o) : r(Y, q, S, e, n, o);
          if (!(Ue === u ? Y === q || i(Y, q, t, r, o) : Ue)) {
            H = !1;
            break;
          }
          B || (B = S == "constructor");
        }
        if (H && !B) {
          var Ee = e.constructor, He = n.constructor;
          Ee != He && "constructor" in e && "constructor" in n && !(typeof Ee == "function" && Ee instanceof Ee && typeof He == "function" && He instanceof He) && (H = !1);
        }
        return o.delete(e), o.delete(n), H;
      }
      function vn(e) {
        return Hi(va(e, u, Aa), e + "");
      }
      function Bi(e) {
        return Rl(e, we, Pi);
      }
      function $i(e) {
        return Rl(e, Be, sa);
      }
      var Ni = lr ? function(e) {
        return lr.get(e);
      } : eu;
      function yr(e) {
        for (var n = e.name + "", t = Vn[n], r = re.call(Vn, n) ? t.length : 0; r--; ) {
          var i = t[r], o = i.func;
          if (o == null || o == e)
            return i.name;
        }
        return n;
      }
      function tt(e) {
        var n = re.call(l, "placeholder") ? l : e;
        return n.placeholder;
      }
      function W() {
        var e = l.iteratee || Vi;
        return e = e === Vi ? Ol : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function xr(e, n) {
        var t = e.__data__;
        return $c(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
      }
      function Mi(e) {
        for (var n = we(e), t = n.length; t--; ) {
          var r = n[t], i = e[r];
          n[t] = [r, i, da(i)];
        }
        return n;
      }
      function Dn(e, n) {
        var t = Pf(e, n);
        return Wl(t) ? t : u;
      }
      function Lc(e) {
        var n = re.call(e, $n), t = e[$n];
        try {
          e[$n] = u;
          var r = !0;
        } catch {
        }
        var i = Vt.call(e);
        return r && (n ? e[$n] = t : delete e[$n]), i;
      }
      var Pi = si ? function(e) {
        return e == null ? [] : (e = ue(e), bn(si(e), function(n) {
          return _l.call(e, n);
        }));
      } : nu, sa = si ? function(e) {
        for (var n = []; e; )
          Cn(n, Pi(e)), e = nr(e);
        return n;
      } : nu, Le = Ie;
      (ci && Le(new ci(new ArrayBuffer(1))) != Gn || mt && Le(new mt()) != Ve || hi && Le(hi.resolve()) != Tu || Qn && Le(new Qn()) != je || wt && Le(new wt()) != gt) && (Le = function(e) {
        var n = Ie(e), t = n == sn ? e.constructor : u, r = t ? Un(t) : "";
        if (r)
          switch (r) {
            case fs:
              return Gn;
            case ss:
              return Ve;
            case cs:
              return Tu;
            case hs:
              return je;
            case ds:
              return gt;
          }
        return n;
      });
      function Ic(e, n, t) {
        for (var r = -1, i = t.length; ++r < i; ) {
          var o = t[r], f = o.size;
          switch (o.type) {
            case "drop":
              e += f;
              break;
            case "dropRight":
              n -= f;
              break;
            case "take":
              n = Te(n, e + f);
              break;
            case "takeRight":
              e = me(e, n - f);
              break;
          }
        }
        return { start: e, end: n };
      }
      function Rc(e) {
        var n = e.match($o);
        return n ? n[1].split(No) : [];
      }
      function ca(e, n, t) {
        n = In(n, e);
        for (var r = -1, i = n.length, o = !1; ++r < i; ) {
          var f = fn(n[r]);
          if (!(o = e != null && t(e, f)))
            break;
          e = e[f];
        }
        return o || ++r != i ? o : (i = e == null ? 0 : e.length, !!i && Ir(i) && _n(f, i) && (P(e) || Hn(e)));
      }
      function Ec(e) {
        var n = e.length, t = new e.constructor(n);
        return n && typeof e[0] == "string" && re.call(e, "index") && (t.index = e.index, t.input = e.input), t;
      }
      function ha(e) {
        return typeof e.constructor == "function" && !It(e) ? jn(nr(e)) : {};
      }
      function Wc(e, n, t) {
        var r = e.constructor;
        switch (n) {
          case vt:
            return Ei(e);
          case ft:
          case st:
            return new r(+e);
          case Gn:
            return gc(e, t);
          case Mr:
          case Pr:
          case Fr:
          case Dr:
          case Ur:
          case Hr:
          case kr:
          case zr:
          case Gr:
            return Kl(e, t);
          case Ve:
            return new r();
          case ct:
          case dt:
            return new r(e);
          case ht:
            return vc(e);
          case je:
            return new r();
          case kt:
            return _c(e);
        }
      }
      function Oc(e, n) {
        var t = n.length;
        if (!t)
          return e;
        var r = t - 1;
        return n[r] = (t > 1 ? "& " : "") + n[r], n = n.join(t > 2 ? ", " : " "), e.replace(Bo, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Bc(e) {
        return P(e) || Hn(e) || !!(pl && e && e[pl]);
      }
      function _n(e, n) {
        var t = typeof e;
        return n = n == null ? xn : n, !!n && (t == "number" || t != "symbol" && Go.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Re(e, n, t) {
        if (!ce(t))
          return !1;
        var r = typeof n;
        return (r == "number" ? Oe(t) && _n(n, t.length) : r == "string" && n in t) ? tn(t[n], e) : !1;
      }
      function Fi(e, n) {
        if (P(e))
          return !1;
        var t = typeof e;
        return t == "number" || t == "symbol" || t == "boolean" || e == null || De(e) ? !0 : Ro.test(e) || !Io.test(e) || n != null && e in ue(n);
      }
      function $c(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Di(e) {
        var n = yr(e), t = l[n];
        if (typeof t != "function" || !(n in X.prototype))
          return !1;
        if (e === t)
          return !0;
        var r = Ni(t);
        return !!r && e === r[0];
      }
      function Nc(e) {
        return !!dl && dl in e;
      }
      var Mc = Jt ? pn : tu;
      function It(e) {
        var n = e && e.constructor, t = typeof n == "function" && n.prototype || Jn;
        return e === t;
      }
      function da(e) {
        return e === e && !ce(e);
      }
      function ga(e, n) {
        return function(t) {
          return t == null ? !1 : t[e] === n && (n !== u || e in ue(t));
        };
      }
      function Pc(e) {
        var n = Tr(e, function(r) {
          return t.size === T && t.clear(), r;
        }), t = n.cache;
        return n;
      }
      function Fc(e, n) {
        var t = e[1], r = n[1], i = t | r, o = i < (ee | xe | V), f = r == V && t == $ || r == V && t == Se && e[7].length <= n[8] || r == (V | Se) && n[7].length <= n[8] && t == $;
        if (!(o || f))
          return e;
        r & ee && (e[2] = n[2], i |= t & ee ? 0 : ke);
        var s = n[3];
        if (s) {
          var h = e[3];
          e[3] = h ? Jl(h, s, n[4]) : s, e[4] = h ? An(e[3], m) : n[4];
        }
        return s = n[5], s && (h = e[5], e[5] = h ? Ql(h, s, n[6]) : s, e[6] = h ? An(e[5], m) : n[6]), s = n[7], s && (e[7] = s), r & V && (e[8] = e[8] == null ? n[8] : Te(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = i, e;
      }
      function Dc(e) {
        var n = [];
        if (e != null)
          for (var t in ue(e))
            n.push(t);
        return n;
      }
      function Uc(e) {
        return Vt.call(e);
      }
      function va(e, n, t) {
        return n = me(n === u ? e.length - 1 : n, 0), function() {
          for (var r = arguments, i = -1, o = me(r.length - n, 0), f = d(o); ++i < o; )
            f[i] = r[n + i];
          i = -1;
          for (var s = d(n + 1); ++i < n; )
            s[i] = r[i];
          return s[n] = t(f), Me(e, this, s);
        };
      }
      function _a(e, n) {
        return n.length < 2 ? e : Fn(e, Ke(n, 0, -1));
      }
      function Hc(e, n) {
        for (var t = e.length, r = Te(n.length, t), i = We(e); r--; ) {
          var o = n[r];
          e[r] = _n(o, t) ? i[o] : u;
        }
        return e;
      }
      function Ui(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var pa = wa(Ul), Rt = ts || function(e, n) {
        return be.setTimeout(e, n);
      }, Hi = wa(sc);
      function ma(e, n, t) {
        var r = n + "";
        return Hi(e, Oc(r, kc(Rc(r), t)));
      }
      function wa(e) {
        var n = 0, t = 0;
        return function() {
          var r = ls(), i = Pt - (r - t);
          if (t = r, i > 0) {
            if (++n >= Mt)
              return arguments[0];
          } else
            n = 0;
          return e.apply(u, arguments);
        };
      }
      function br(e, n) {
        var t = -1, r = e.length, i = r - 1;
        for (n = n === u ? r : n; ++t < n; ) {
          var o = Ci(t, i), f = e[o];
          e[o] = e[t], e[t] = f;
        }
        return e.length = n, e;
      }
      var ya = Pc(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Eo, function(t, r, i, o) {
          n.push(i ? o.replace(Fo, "$1") : r || t);
        }), n;
      });
      function fn(e) {
        if (typeof e == "string" || De(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -On ? "-0" : n;
      }
      function Un(e) {
        if (e != null) {
          try {
            return Qt.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function kc(e, n) {
        return Ge(go, function(t) {
          var r = "_." + t[0];
          n & t[1] && !Xt(e, r) && e.push(r);
        }), e.sort();
      }
      function xa(e) {
        if (e instanceof X)
          return e.clone();
        var n = new Xe(e.__wrapped__, e.__chain__);
        return n.__actions__ = We(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function zc(e, n, t) {
        (t ? Re(e, n, t) : n === u) ? n = 1 : n = me(D(n), 0);
        var r = e == null ? 0 : e.length;
        if (!r || n < 1)
          return [];
        for (var i = 0, o = 0, f = d(ir(r / n)); i < r; )
          f[o++] = Ke(e, i, i += n);
        return f;
      }
      function Gc(e) {
        for (var n = -1, t = e == null ? 0 : e.length, r = 0, i = []; ++n < t; ) {
          var o = e[n];
          o && (i[r++] = o);
        }
        return i;
      }
      function Yc() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = d(e - 1), t = arguments[0], r = e; r--; )
          n[r - 1] = arguments[r];
        return Cn(P(t) ? We(t) : [t], Ce(n, 1));
      }
      var Xc = z(function(e, n) {
        return ve(e) ? Ct(e, Ce(n, 1, ve, !0)) : [];
      }), qc = z(function(e, n) {
        var t = Ze(n);
        return ve(t) && (t = u), ve(e) ? Ct(e, Ce(n, 1, ve, !0), W(t, 2)) : [];
      }), Kc = z(function(e, n) {
        var t = Ze(n);
        return ve(t) && (t = u), ve(e) ? Ct(e, Ce(n, 1, ve, !0), u, t) : [];
      });
      function Zc(e, n, t) {
        var r = e == null ? 0 : e.length;
        return r ? (n = t || n === u ? 1 : D(n), Ke(e, n < 0 ? 0 : n, r)) : [];
      }
      function Jc(e, n, t) {
        var r = e == null ? 0 : e.length;
        return r ? (n = t || n === u ? 1 : D(n), n = r - n, Ke(e, 0, n < 0 ? 0 : n)) : [];
      }
      function Qc(e, n) {
        return e && e.length ? gr(e, W(n, 3), !0, !0) : [];
      }
      function Vc(e, n) {
        return e && e.length ? gr(e, W(n, 3), !0) : [];
      }
      function jc(e, n, t, r) {
        var i = e == null ? 0 : e.length;
        return i ? (t && typeof t != "number" && Re(e, n, t) && (t = 0, r = i), Ys(e, n, t, r)) : [];
      }
      function ba(e, n, t) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : D(t);
        return i < 0 && (i = me(r + i, 0)), qt(e, W(n, 3), i);
      }
      function Ca(e, n, t) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var i = r - 1;
        return t !== u && (i = D(t), i = t < 0 ? me(r + i, 0) : Te(i, r - 1)), qt(e, W(n, 3), i, !0);
      }
      function Aa(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ce(e, 1) : [];
      }
      function eh(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ce(e, On) : [];
      }
      function nh(e, n) {
        var t = e == null ? 0 : e.length;
        return t ? (n = n === u ? 1 : D(n), Ce(e, n)) : [];
      }
      function th(e) {
        for (var n = -1, t = e == null ? 0 : e.length, r = {}; ++n < t; ) {
          var i = e[n];
          r[i[0]] = i[1];
        }
        return r;
      }
      function Sa(e) {
        return e && e.length ? e[0] : u;
      }
      function rh(e, n, t) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : D(t);
        return i < 0 && (i = me(r + i, 0)), Xn(e, n, i);
      }
      function ih(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ke(e, 0, -1) : [];
      }
      var uh = z(function(e) {
        var n = se(e, Ii);
        return n.length && n[0] === e[0] ? mi(n) : [];
      }), lh = z(function(e) {
        var n = Ze(e), t = se(e, Ii);
        return n === Ze(t) ? n = u : t.pop(), t.length && t[0] === e[0] ? mi(t, W(n, 2)) : [];
      }), ah = z(function(e) {
        var n = Ze(e), t = se(e, Ii);
        return n = typeof n == "function" ? n : u, n && t.pop(), t.length && t[0] === e[0] ? mi(t, u, n) : [];
      });
      function oh(e, n) {
        return e == null ? "" : is.call(e, n);
      }
      function Ze(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : u;
      }
      function fh(e, n, t) {
        var r = e == null ? 0 : e.length;
        if (!r)
          return -1;
        var i = r;
        return t !== u && (i = D(t), i = i < 0 ? me(r + i, 0) : Te(i, r - 1)), n === n ? kf(e, n, i) : qt(e, ul, i, !0);
      }
      function sh(e, n) {
        return e && e.length ? Ml(e, D(n)) : u;
      }
      var ch = z(Ta);
      function Ta(e, n) {
        return e && e.length && n && n.length ? bi(e, n) : e;
      }
      function hh(e, n, t) {
        return e && e.length && n && n.length ? bi(e, n, W(t, 2)) : e;
      }
      function dh(e, n, t) {
        return e && e.length && n && n.length ? bi(e, n, u, t) : e;
      }
      var gh = vn(function(e, n) {
        var t = e == null ? 0 : e.length, r = gi(e, n);
        return Dl(e, se(n, function(i) {
          return _n(i, t) ? +i : i;
        }).sort(Zl)), r;
      });
      function vh(e, n) {
        var t = [];
        if (!(e && e.length))
          return t;
        var r = -1, i = [], o = e.length;
        for (n = W(n, 3); ++r < o; ) {
          var f = e[r];
          n(f, r, e) && (t.push(f), i.push(r));
        }
        return Dl(e, i), t;
      }
      function ki(e) {
        return e == null ? e : os.call(e);
      }
      function _h(e, n, t) {
        var r = e == null ? 0 : e.length;
        return r ? (t && typeof t != "number" && Re(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : D(n), t = t === u ? r : D(t)), Ke(e, n, t)) : [];
      }
      function ph(e, n) {
        return dr(e, n);
      }
      function mh(e, n, t) {
        return Si(e, n, W(t, 2));
      }
      function wh(e, n) {
        var t = e == null ? 0 : e.length;
        if (t) {
          var r = dr(e, n);
          if (r < t && tn(e[r], n))
            return r;
        }
        return -1;
      }
      function yh(e, n) {
        return dr(e, n, !0);
      }
      function xh(e, n, t) {
        return Si(e, n, W(t, 2), !0);
      }
      function bh(e, n) {
        var t = e == null ? 0 : e.length;
        if (t) {
          var r = dr(e, n, !0) - 1;
          if (tn(e[r], n))
            return r;
        }
        return -1;
      }
      function Ch(e) {
        return e && e.length ? Hl(e) : [];
      }
      function Ah(e, n) {
        return e && e.length ? Hl(e, W(n, 2)) : [];
      }
      function Sh(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ke(e, 1, n) : [];
      }
      function Th(e, n, t) {
        return e && e.length ? (n = t || n === u ? 1 : D(n), Ke(e, 0, n < 0 ? 0 : n)) : [];
      }
      function Lh(e, n, t) {
        var r = e == null ? 0 : e.length;
        return r ? (n = t || n === u ? 1 : D(n), n = r - n, Ke(e, n < 0 ? 0 : n, r)) : [];
      }
      function Ih(e, n) {
        return e && e.length ? gr(e, W(n, 3), !1, !0) : [];
      }
      function Rh(e, n) {
        return e && e.length ? gr(e, W(n, 3)) : [];
      }
      var Eh = z(function(e) {
        return Ln(Ce(e, 1, ve, !0));
      }), Wh = z(function(e) {
        var n = Ze(e);
        return ve(n) && (n = u), Ln(Ce(e, 1, ve, !0), W(n, 2));
      }), Oh = z(function(e) {
        var n = Ze(e);
        return n = typeof n == "function" ? n : u, Ln(Ce(e, 1, ve, !0), u, n);
      });
      function Bh(e) {
        return e && e.length ? Ln(e) : [];
      }
      function $h(e, n) {
        return e && e.length ? Ln(e, W(n, 2)) : [];
      }
      function Nh(e, n) {
        return n = typeof n == "function" ? n : u, e && e.length ? Ln(e, u, n) : [];
      }
      function zi(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = bn(e, function(t) {
          if (ve(t))
            return n = me(t.length, n), !0;
        }), li(n, function(t) {
          return se(e, ri(t));
        });
      }
      function La(e, n) {
        if (!(e && e.length))
          return [];
        var t = zi(e);
        return n == null ? t : se(t, function(r) {
          return Me(n, u, r);
        });
      }
      var Mh = z(function(e, n) {
        return ve(e) ? Ct(e, n) : [];
      }), Ph = z(function(e) {
        return Li(bn(e, ve));
      }), Fh = z(function(e) {
        var n = Ze(e);
        return ve(n) && (n = u), Li(bn(e, ve), W(n, 2));
      }), Dh = z(function(e) {
        var n = Ze(e);
        return n = typeof n == "function" ? n : u, Li(bn(e, ve), u, n);
      }), Uh = z(zi);
      function Hh(e, n) {
        return Yl(e || [], n || [], bt);
      }
      function kh(e, n) {
        return Yl(e || [], n || [], Tt);
      }
      var zh = z(function(e) {
        var n = e.length, t = n > 1 ? e[n - 1] : u;
        return t = typeof t == "function" ? (e.pop(), t) : u, La(e, t);
      });
      function Ia(e) {
        var n = l(e);
        return n.__chain__ = !0, n;
      }
      function Gh(e, n) {
        return n(e), e;
      }
      function Cr(e, n) {
        return n(e);
      }
      var Yh = vn(function(e) {
        var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, i = function(o) {
          return gi(o, e);
        };
        return n > 1 || this.__actions__.length || !(r instanceof X) || !_n(t) ? this.thru(i) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
          func: Cr,
          args: [i],
          thisArg: u
        }), new Xe(r, this.__chain__).thru(function(o) {
          return n && !o.length && o.push(u), o;
        }));
      });
      function Xh() {
        return Ia(this);
      }
      function qh() {
        return new Xe(this.value(), this.__chain__);
      }
      function Kh() {
        this.__values__ === u && (this.__values__ = ka(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? u : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function Zh() {
        return this;
      }
      function Jh(e) {
        for (var n, t = this; t instanceof or; ) {
          var r = xa(t);
          r.__index__ = 0, r.__values__ = u, n ? i.__wrapped__ = r : n = r;
          var i = r;
          t = t.__wrapped__;
        }
        return i.__wrapped__ = e, n;
      }
      function Qh() {
        var e = this.__wrapped__;
        if (e instanceof X) {
          var n = e;
          return this.__actions__.length && (n = new X(this)), n = n.reverse(), n.__actions__.push({
            func: Cr,
            args: [ki],
            thisArg: u
          }), new Xe(n, this.__chain__);
        }
        return this.thru(ki);
      }
      function Vh() {
        return Gl(this.__wrapped__, this.__actions__);
      }
      var jh = vr(function(e, n, t) {
        re.call(e, t) ? ++e[t] : dn(e, t, 1);
      });
      function ed(e, n, t) {
        var r = P(e) ? rl : Gs;
        return t && Re(e, n, t) && (n = u), r(e, W(n, 3));
      }
      function nd(e, n) {
        var t = P(e) ? bn : Ll;
        return t(e, W(n, 3));
      }
      var td = na(ba), rd = na(Ca);
      function id(e, n) {
        return Ce(Ar(e, n), 1);
      }
      function ud(e, n) {
        return Ce(Ar(e, n), On);
      }
      function ld(e, n, t) {
        return t = t === u ? 1 : D(t), Ce(Ar(e, n), t);
      }
      function Ra(e, n) {
        var t = P(e) ? Ge : Tn;
        return t(e, W(n, 3));
      }
      function Ea(e, n) {
        var t = P(e) ? Sf : Tl;
        return t(e, W(n, 3));
      }
      var ad = vr(function(e, n, t) {
        re.call(e, t) ? e[t].push(n) : dn(e, t, [n]);
      });
      function od(e, n, t, r) {
        e = Oe(e) ? e : it(e), t = t && !r ? D(t) : 0;
        var i = e.length;
        return t < 0 && (t = me(i + t, 0)), Rr(e) ? t <= i && e.indexOf(n, t) > -1 : !!i && Xn(e, n, t) > -1;
      }
      var fd = z(function(e, n, t) {
        var r = -1, i = typeof n == "function", o = Oe(e) ? d(e.length) : [];
        return Tn(e, function(f) {
          o[++r] = i ? Me(n, f, t) : At(f, n, t);
        }), o;
      }), sd = vr(function(e, n, t) {
        dn(e, t, n);
      });
      function Ar(e, n) {
        var t = P(e) ? se : Bl;
        return t(e, W(n, 3));
      }
      function cd(e, n, t, r) {
        return e == null ? [] : (P(n) || (n = n == null ? [] : [n]), t = r ? u : t, P(t) || (t = t == null ? [] : [t]), Pl(e, n, t));
      }
      var hd = vr(function(e, n, t) {
        e[t ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function dd(e, n, t) {
        var r = P(e) ? ni : al, i = arguments.length < 3;
        return r(e, W(n, 4), t, i, Tn);
      }
      function gd(e, n, t) {
        var r = P(e) ? Tf : al, i = arguments.length < 3;
        return r(e, W(n, 4), t, i, Tl);
      }
      function vd(e, n) {
        var t = P(e) ? bn : Ll;
        return t(e, Lr(W(n, 3)));
      }
      function _d(e) {
        var n = P(e) ? bl : oc;
        return n(e);
      }
      function pd(e, n, t) {
        (t ? Re(e, n, t) : n === u) ? n = 1 : n = D(n);
        var r = P(e) ? Ds : fc;
        return r(e, n);
      }
      function md(e) {
        var n = P(e) ? Us : cc;
        return n(e);
      }
      function wd(e) {
        if (e == null)
          return 0;
        if (Oe(e))
          return Rr(e) ? Kn(e) : e.length;
        var n = Le(e);
        return n == Ve || n == je ? e.size : yi(e).length;
      }
      function yd(e, n, t) {
        var r = P(e) ? ti : hc;
        return t && Re(e, n, t) && (n = u), r(e, W(n, 3));
      }
      var xd = z(function(e, n) {
        if (e == null)
          return [];
        var t = n.length;
        return t > 1 && Re(e, n[0], n[1]) ? n = [] : t > 2 && Re(n[0], n[1], n[2]) && (n = [n[0]]), Pl(e, Ce(n, 1), []);
      }), Sr = ns || function() {
        return be.Date.now();
      };
      function bd(e, n) {
        if (typeof n != "function")
          throw new Ye(b);
        return e = D(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function Wa(e, n, t) {
        return n = t ? u : n, n = e && n == null ? e.length : n, gn(e, V, u, u, u, u, n);
      }
      function Oa(e, n) {
        var t;
        if (typeof n != "function")
          throw new Ye(b);
        return e = D(e), function() {
          return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = u), t;
        };
      }
      var Gi = z(function(e, n, t) {
        var r = ee;
        if (t.length) {
          var i = An(t, tt(Gi));
          r |= C;
        }
        return gn(e, r, n, t, i);
      }), Ba = z(function(e, n, t) {
        var r = ee | xe;
        if (t.length) {
          var i = An(t, tt(Ba));
          r |= C;
        }
        return gn(n, r, e, t, i);
      });
      function $a(e, n, t) {
        n = t ? u : n;
        var r = gn(e, $, u, u, u, u, u, n);
        return r.placeholder = $a.placeholder, r;
      }
      function Na(e, n, t) {
        n = t ? u : n;
        var r = gn(e, J, u, u, u, u, u, n);
        return r.placeholder = Na.placeholder, r;
      }
      function Ma(e, n, t) {
        var r, i, o, f, s, h, v = 0, _ = !1, p = !1, S = !0;
        if (typeof e != "function")
          throw new Ye(b);
        n = Je(n) || 0, ce(t) && (_ = !!t.leading, p = "maxWait" in t, o = p ? me(Je(t.maxWait) || 0, n) : o, S = "trailing" in t ? !!t.trailing : S);
        function E(_e) {
          var rn = r, wn = i;
          return r = i = u, v = _e, f = e.apply(wn, rn), f;
        }
        function O(_e) {
          return v = _e, s = Rt(Y, n), _ ? E(_e) : f;
        }
        function H(_e) {
          var rn = _e - h, wn = _e - v, no = n - rn;
          return p ? Te(no, o - wn) : no;
        }
        function B(_e) {
          var rn = _e - h, wn = _e - v;
          return h === u || rn >= n || rn < 0 || p && wn >= o;
        }
        function Y() {
          var _e = Sr();
          if (B(_e))
            return q(_e);
          s = Rt(Y, H(_e));
        }
        function q(_e) {
          return s = u, S && r ? E(_e) : (r = i = u, f);
        }
        function Ue() {
          s !== u && Xl(s), v = 0, r = h = i = s = u;
        }
        function Ee() {
          return s === u ? f : q(Sr());
        }
        function He() {
          var _e = Sr(), rn = B(_e);
          if (r = arguments, i = this, h = _e, rn) {
            if (s === u)
              return O(h);
            if (p)
              return Xl(s), s = Rt(Y, n), E(h);
          }
          return s === u && (s = Rt(Y, n)), f;
        }
        return He.cancel = Ue, He.flush = Ee, He;
      }
      var Cd = z(function(e, n) {
        return Sl(e, 1, n);
      }), Ad = z(function(e, n, t) {
        return Sl(e, Je(n) || 0, t);
      });
      function Sd(e) {
        return gn(e, Ne);
      }
      function Tr(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Ye(b);
        var t = function() {
          var r = arguments, i = n ? n.apply(this, r) : r[0], o = t.cache;
          if (o.has(i))
            return o.get(i);
          var f = e.apply(this, r);
          return t.cache = o.set(i, f) || o, f;
        };
        return t.cache = new (Tr.Cache || hn)(), t;
      }
      Tr.Cache = hn;
      function Lr(e) {
        if (typeof e != "function")
          throw new Ye(b);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function Td(e) {
        return Oa(2, e);
      }
      var Ld = dc(function(e, n) {
        n = n.length == 1 && P(n[0]) ? se(n[0], Pe(W())) : se(Ce(n, 1), Pe(W()));
        var t = n.length;
        return z(function(r) {
          for (var i = -1, o = Te(r.length, t); ++i < o; )
            r[i] = n[i].call(this, r[i]);
          return Me(e, this, r);
        });
      }), Yi = z(function(e, n) {
        var t = An(n, tt(Yi));
        return gn(e, C, u, n, t);
      }), Pa = z(function(e, n) {
        var t = An(n, tt(Pa));
        return gn(e, U, u, n, t);
      }), Id = vn(function(e, n) {
        return gn(e, Se, u, u, u, n);
      });
      function Rd(e, n) {
        if (typeof e != "function")
          throw new Ye(b);
        return n = n === u ? n : D(n), z(e, n);
      }
      function Ed(e, n) {
        if (typeof e != "function")
          throw new Ye(b);
        return n = n == null ? 0 : me(D(n), 0), z(function(t) {
          var r = t[n], i = Rn(t, 0, n);
          return r && Cn(i, r), Me(e, this, i);
        });
      }
      function Wd(e, n, t) {
        var r = !0, i = !0;
        if (typeof e != "function")
          throw new Ye(b);
        return ce(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), Ma(e, n, {
          leading: r,
          maxWait: n,
          trailing: i
        });
      }
      function Od(e) {
        return Wa(e, 1);
      }
      function Bd(e, n) {
        return Yi(Ri(n), e);
      }
      function $d() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return P(e) ? e : [e];
      }
      function Nd(e) {
        return qe(e, Z);
      }
      function Md(e, n) {
        return n = typeof n == "function" ? n : u, qe(e, Z, n);
      }
      function Pd(e) {
        return qe(e, R | Z);
      }
      function Fd(e, n) {
        return n = typeof n == "function" ? n : u, qe(e, R | Z, n);
      }
      function Dd(e, n) {
        return n == null || Al(e, n, we(n));
      }
      function tn(e, n) {
        return e === n || e !== e && n !== n;
      }
      var Ud = wr(pi), Hd = wr(function(e, n) {
        return e >= n;
      }), Hn = El(function() {
        return arguments;
      }()) ? El : function(e) {
        return de(e) && re.call(e, "callee") && !_l.call(e, "callee");
      }, P = d.isArray, kd = Qu ? Pe(Qu) : Js;
      function Oe(e) {
        return e != null && Ir(e.length) && !pn(e);
      }
      function ve(e) {
        return de(e) && Oe(e);
      }
      function zd(e) {
        return e === !0 || e === !1 || de(e) && Ie(e) == ft;
      }
      var En = rs || tu, Gd = Vu ? Pe(Vu) : Qs;
      function Yd(e) {
        return de(e) && e.nodeType === 1 && !Et(e);
      }
      function Xd(e) {
        if (e == null)
          return !0;
        if (Oe(e) && (P(e) || typeof e == "string" || typeof e.splice == "function" || En(e) || rt(e) || Hn(e)))
          return !e.length;
        var n = Le(e);
        if (n == Ve || n == je)
          return !e.size;
        if (It(e))
          return !yi(e).length;
        for (var t in e)
          if (re.call(e, t))
            return !1;
        return !0;
      }
      function qd(e, n) {
        return St(e, n);
      }
      function Kd(e, n, t) {
        t = typeof t == "function" ? t : u;
        var r = t ? t(e, n) : u;
        return r === u ? St(e, n, u, t) : !!r;
      }
      function Xi(e) {
        if (!de(e))
          return !1;
        var n = Ie(e);
        return n == Ut || n == _o || typeof e.message == "string" && typeof e.name == "string" && !Et(e);
      }
      function Zd(e) {
        return typeof e == "number" && ml(e);
      }
      function pn(e) {
        if (!ce(e))
          return !1;
        var n = Ie(e);
        return n == Ht || n == Su || n == vo || n == mo;
      }
      function Fa(e) {
        return typeof e == "number" && e == D(e);
      }
      function Ir(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xn;
      }
      function ce(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function de(e) {
        return e != null && typeof e == "object";
      }
      var Da = ju ? Pe(ju) : js;
      function Jd(e, n) {
        return e === n || wi(e, n, Mi(n));
      }
      function Qd(e, n, t) {
        return t = typeof t == "function" ? t : u, wi(e, n, Mi(n), t);
      }
      function Vd(e) {
        return Ua(e) && e != +e;
      }
      function jd(e) {
        if (Mc(e))
          throw new N(y);
        return Wl(e);
      }
      function eg(e) {
        return e === null;
      }
      function ng(e) {
        return e == null;
      }
      function Ua(e) {
        return typeof e == "number" || de(e) && Ie(e) == ct;
      }
      function Et(e) {
        if (!de(e) || Ie(e) != sn)
          return !1;
        var n = nr(e);
        if (n === null)
          return !0;
        var t = re.call(n, "constructor") && n.constructor;
        return typeof t == "function" && t instanceof t && Qt.call(t) == Qf;
      }
      var qi = el ? Pe(el) : ec;
      function tg(e) {
        return Fa(e) && e >= -xn && e <= xn;
      }
      var Ha = nl ? Pe(nl) : nc;
      function Rr(e) {
        return typeof e == "string" || !P(e) && de(e) && Ie(e) == dt;
      }
      function De(e) {
        return typeof e == "symbol" || de(e) && Ie(e) == kt;
      }
      var rt = tl ? Pe(tl) : tc;
      function rg(e) {
        return e === u;
      }
      function ig(e) {
        return de(e) && Le(e) == gt;
      }
      function ug(e) {
        return de(e) && Ie(e) == yo;
      }
      var lg = wr(xi), ag = wr(function(e, n) {
        return e <= n;
      });
      function ka(e) {
        if (!e)
          return [];
        if (Oe(e))
          return Rr(e) ? en(e) : We(e);
        if (pt && e[pt])
          return Df(e[pt]());
        var n = Le(e), t = n == Ve ? oi : n == je ? Kt : it;
        return t(e);
      }
      function mn(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Je(e), e === On || e === -On) {
          var n = e < 0 ? -1 : 1;
          return n * so;
        }
        return e === e ? e : 0;
      }
      function D(e) {
        var n = mn(e), t = n % 1;
        return n === n ? t ? n - t : n : 0;
      }
      function za(e) {
        return e ? Pn(D(e), 0, ln) : 0;
      }
      function Je(e) {
        if (typeof e == "number")
          return e;
        if (De(e))
          return Ft;
        if (ce(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ce(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = ol(e);
        var t = Ho.test(e);
        return t || zo.test(e) ? bf(e.slice(2), t ? 2 : 8) : Uo.test(e) ? Ft : +e;
      }
      function Ga(e) {
        return on(e, Be(e));
      }
      function og(e) {
        return e ? Pn(D(e), -xn, xn) : e === 0 ? e : 0;
      }
      function ne(e) {
        return e == null ? "" : Fe(e);
      }
      var fg = et(function(e, n) {
        if (It(n) || Oe(n)) {
          on(n, we(n), e);
          return;
        }
        for (var t in n)
          re.call(n, t) && bt(e, t, n[t]);
      }), Ya = et(function(e, n) {
        on(n, Be(n), e);
      }), Er = et(function(e, n, t, r) {
        on(n, Be(n), e, r);
      }), sg = et(function(e, n, t, r) {
        on(n, we(n), e, r);
      }), cg = vn(gi);
      function hg(e, n) {
        var t = jn(e);
        return n == null ? t : Cl(t, n);
      }
      var dg = z(function(e, n) {
        e = ue(e);
        var t = -1, r = n.length, i = r > 2 ? n[2] : u;
        for (i && Re(n[0], n[1], i) && (r = 1); ++t < r; )
          for (var o = n[t], f = Be(o), s = -1, h = f.length; ++s < h; ) {
            var v = f[s], _ = e[v];
            (_ === u || tn(_, Jn[v]) && !re.call(e, v)) && (e[v] = o[v]);
          }
        return e;
      }), gg = z(function(e) {
        return e.push(u, oa), Me(Xa, u, e);
      });
      function vg(e, n) {
        return il(e, W(n, 3), an);
      }
      function _g(e, n) {
        return il(e, W(n, 3), _i);
      }
      function pg(e, n) {
        return e == null ? e : vi(e, W(n, 3), Be);
      }
      function mg(e, n) {
        return e == null ? e : Il(e, W(n, 3), Be);
      }
      function wg(e, n) {
        return e && an(e, W(n, 3));
      }
      function yg(e, n) {
        return e && _i(e, W(n, 3));
      }
      function xg(e) {
        return e == null ? [] : cr(e, we(e));
      }
      function bg(e) {
        return e == null ? [] : cr(e, Be(e));
      }
      function Ki(e, n, t) {
        var r = e == null ? u : Fn(e, n);
        return r === u ? t : r;
      }
      function Cg(e, n) {
        return e != null && ca(e, n, Xs);
      }
      function Zi(e, n) {
        return e != null && ca(e, n, qs);
      }
      var Ag = ra(function(e, n, t) {
        n != null && typeof n.toString != "function" && (n = Vt.call(n)), e[n] = t;
      }, Qi($e)), Sg = ra(function(e, n, t) {
        n != null && typeof n.toString != "function" && (n = Vt.call(n)), re.call(e, n) ? e[n].push(t) : e[n] = [t];
      }, W), Tg = z(At);
      function we(e) {
        return Oe(e) ? xl(e) : yi(e);
      }
      function Be(e) {
        return Oe(e) ? xl(e, !0) : rc(e);
      }
      function Lg(e, n) {
        var t = {};
        return n = W(n, 3), an(e, function(r, i, o) {
          dn(t, n(r, i, o), r);
        }), t;
      }
      function Ig(e, n) {
        var t = {};
        return n = W(n, 3), an(e, function(r, i, o) {
          dn(t, i, n(r, i, o));
        }), t;
      }
      var Rg = et(function(e, n, t) {
        hr(e, n, t);
      }), Xa = et(function(e, n, t, r) {
        hr(e, n, t, r);
      }), Eg = vn(function(e, n) {
        var t = {};
        if (e == null)
          return t;
        var r = !1;
        n = se(n, function(o) {
          return o = In(o, e), r || (r = o.length > 1), o;
        }), on(e, $i(e), t), r && (t = qe(t, R | G | Z, Ac));
        for (var i = n.length; i--; )
          Ti(t, n[i]);
        return t;
      });
      function Wg(e, n) {
        return qa(e, Lr(W(n)));
      }
      var Og = vn(function(e, n) {
        return e == null ? {} : uc(e, n);
      });
      function qa(e, n) {
        if (e == null)
          return {};
        var t = se($i(e), function(r) {
          return [r];
        });
        return n = W(n), Fl(e, t, function(r, i) {
          return n(r, i[0]);
        });
      }
      function Bg(e, n, t) {
        n = In(n, e);
        var r = -1, i = n.length;
        for (i || (i = 1, e = u); ++r < i; ) {
          var o = e == null ? u : e[fn(n[r])];
          o === u && (r = i, o = t), e = pn(o) ? o.call(e) : o;
        }
        return e;
      }
      function $g(e, n, t) {
        return e == null ? e : Tt(e, n, t);
      }
      function Ng(e, n, t, r) {
        return r = typeof r == "function" ? r : u, e == null ? e : Tt(e, n, t, r);
      }
      var Ka = la(we), Za = la(Be);
      function Mg(e, n, t) {
        var r = P(e), i = r || En(e) || rt(e);
        if (n = W(n, 4), t == null) {
          var o = e && e.constructor;
          i ? t = r ? new o() : [] : ce(e) ? t = pn(o) ? jn(nr(e)) : {} : t = {};
        }
        return (i ? Ge : an)(e, function(f, s, h) {
          return n(t, f, s, h);
        }), t;
      }
      function Pg(e, n) {
        return e == null ? !0 : Ti(e, n);
      }
      function Fg(e, n, t) {
        return e == null ? e : zl(e, n, Ri(t));
      }
      function Dg(e, n, t, r) {
        return r = typeof r == "function" ? r : u, e == null ? e : zl(e, n, Ri(t), r);
      }
      function it(e) {
        return e == null ? [] : ai(e, we(e));
      }
      function Ug(e) {
        return e == null ? [] : ai(e, Be(e));
      }
      function Hg(e, n, t) {
        return t === u && (t = n, n = u), t !== u && (t = Je(t), t = t === t ? t : 0), n !== u && (n = Je(n), n = n === n ? n : 0), Pn(Je(e), n, t);
      }
      function kg(e, n, t) {
        return n = mn(n), t === u ? (t = n, n = 0) : t = mn(t), e = Je(e), Ks(e, n, t);
      }
      function zg(e, n, t) {
        if (t && typeof t != "boolean" && Re(e, n, t) && (n = t = u), t === u && (typeof n == "boolean" ? (t = n, n = u) : typeof e == "boolean" && (t = e, e = u)), e === u && n === u ? (e = 0, n = 1) : (e = mn(e), n === u ? (n = e, e = 0) : n = mn(n)), e > n) {
          var r = e;
          e = n, n = r;
        }
        if (t || e % 1 || n % 1) {
          var i = wl();
          return Te(e + i * (n - e + xf("1e-" + ((i + "").length - 1))), n);
        }
        return Ci(e, n);
      }
      var Gg = nt(function(e, n, t) {
        return n = n.toLowerCase(), e + (t ? Ja(n) : n);
      });
      function Ja(e) {
        return Ji(ne(e).toLowerCase());
      }
      function Qa(e) {
        return e = ne(e), e && e.replace(Yo, $f).replace(cf, "");
      }
      function Yg(e, n, t) {
        e = ne(e), n = Fe(n);
        var r = e.length;
        t = t === u ? r : Pn(D(t), 0, r);
        var i = t;
        return t -= n.length, t >= 0 && e.slice(t, i) == n;
      }
      function Xg(e) {
        return e = ne(e), e && So.test(e) ? e.replace(Iu, Nf) : e;
      }
      function qg(e) {
        return e = ne(e), e && Wo.test(e) ? e.replace(Yr, "\\$&") : e;
      }
      var Kg = nt(function(e, n, t) {
        return e + (t ? "-" : "") + n.toLowerCase();
      }), Zg = nt(function(e, n, t) {
        return e + (t ? " " : "") + n.toLowerCase();
      }), Jg = ea("toLowerCase");
      function Qg(e, n, t) {
        e = ne(e), n = D(n);
        var r = n ? Kn(e) : 0;
        if (!n || r >= n)
          return e;
        var i = (n - r) / 2;
        return mr(ur(i), t) + e + mr(ir(i), t);
      }
      function Vg(e, n, t) {
        e = ne(e), n = D(n);
        var r = n ? Kn(e) : 0;
        return n && r < n ? e + mr(n - r, t) : e;
      }
      function jg(e, n, t) {
        e = ne(e), n = D(n);
        var r = n ? Kn(e) : 0;
        return n && r < n ? mr(n - r, t) + e : e;
      }
      function ev(e, n, t) {
        return t || n == null ? n = 0 : n && (n = +n), as(ne(e).replace(Xr, ""), n || 0);
      }
      function nv(e, n, t) {
        return (t ? Re(e, n, t) : n === u) ? n = 1 : n = D(n), Ai(ne(e), n);
      }
      function tv() {
        var e = arguments, n = ne(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var rv = nt(function(e, n, t) {
        return e + (t ? "_" : "") + n.toLowerCase();
      });
      function iv(e, n, t) {
        return t && typeof t != "number" && Re(e, n, t) && (n = t = u), t = t === u ? ln : t >>> 0, t ? (e = ne(e), e && (typeof n == "string" || n != null && !qi(n)) && (n = Fe(n), !n && qn(e)) ? Rn(en(e), 0, t) : e.split(n, t)) : [];
      }
      var uv = nt(function(e, n, t) {
        return e + (t ? " " : "") + Ji(n);
      });
      function lv(e, n, t) {
        return e = ne(e), t = t == null ? 0 : Pn(D(t), 0, e.length), n = Fe(n), e.slice(t, t + n.length) == n;
      }
      function av(e, n, t) {
        var r = l.templateSettings;
        t && Re(e, n, t) && (n = u), e = ne(e), n = Er({}, n, r, aa);
        var i = Er({}, n.imports, r.imports, aa), o = we(i), f = ai(i, o), s, h, v = 0, _ = n.interpolate || zt, p = "__p += '", S = fi((n.escape || zt).source + "|" + _.source + "|" + (_ === Ru ? Do : zt).source + "|" + (n.evaluate || zt).source + "|$", "g"), E = "//# sourceURL=" + (re.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++_f + "]") + `
`;
        e.replace(S, function(B, Y, q, Ue, Ee, He) {
          return q || (q = Ue), p += e.slice(v, He).replace(Xo, Mf), Y && (s = !0, p += `' +
__e(` + Y + `) +
'`), Ee && (h = !0, p += `';
` + Ee + `;
__p += '`), q && (p += `' +
((__t = (` + q + `)) == null ? '' : __t) +
'`), v = He + B.length, B;
        }), p += `';
`;
        var O = re.call(n, "variable") && n.variable;
        if (!O)
          p = `with (obj) {
` + p + `
}
`;
        else if (Po.test(O))
          throw new N(L);
        p = (h ? p.replace(xo, "") : p).replace(bo, "$1").replace(Co, "$1;"), p = "function(" + (O || "obj") + `) {
` + (O ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (h ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
        var H = ja(function() {
          return j(o, E + "return " + p).apply(u, f);
        });
        if (H.source = p, Xi(H))
          throw H;
        return H;
      }
      function ov(e) {
        return ne(e).toLowerCase();
      }
      function fv(e) {
        return ne(e).toUpperCase();
      }
      function sv(e, n, t) {
        if (e = ne(e), e && (t || n === u))
          return ol(e);
        if (!e || !(n = Fe(n)))
          return e;
        var r = en(e), i = en(n), o = fl(r, i), f = sl(r, i) + 1;
        return Rn(r, o, f).join("");
      }
      function cv(e, n, t) {
        if (e = ne(e), e && (t || n === u))
          return e.slice(0, hl(e) + 1);
        if (!e || !(n = Fe(n)))
          return e;
        var r = en(e), i = sl(r, en(n)) + 1;
        return Rn(r, 0, i).join("");
      }
      function hv(e, n, t) {
        if (e = ne(e), e && (t || n === u))
          return e.replace(Xr, "");
        if (!e || !(n = Fe(n)))
          return e;
        var r = en(e), i = fl(r, en(n));
        return Rn(r, i).join("");
      }
      function dv(e, n) {
        var t = Qe, r = Wn;
        if (ce(n)) {
          var i = "separator" in n ? n.separator : i;
          t = "length" in n ? D(n.length) : t, r = "omission" in n ? Fe(n.omission) : r;
        }
        e = ne(e);
        var o = e.length;
        if (qn(e)) {
          var f = en(e);
          o = f.length;
        }
        if (t >= o)
          return e;
        var s = t - Kn(r);
        if (s < 1)
          return r;
        var h = f ? Rn(f, 0, s).join("") : e.slice(0, s);
        if (i === u)
          return h + r;
        if (f && (s += h.length - s), qi(i)) {
          if (e.slice(s).search(i)) {
            var v, _ = h;
            for (i.global || (i = fi(i.source, ne(Eu.exec(i)) + "g")), i.lastIndex = 0; v = i.exec(_); )
              var p = v.index;
            h = h.slice(0, p === u ? s : p);
          }
        } else if (e.indexOf(Fe(i), s) != s) {
          var S = h.lastIndexOf(i);
          S > -1 && (h = h.slice(0, S));
        }
        return h + r;
      }
      function gv(e) {
        return e = ne(e), e && Ao.test(e) ? e.replace(Lu, zf) : e;
      }
      var vv = nt(function(e, n, t) {
        return e + (t ? " " : "") + n.toUpperCase();
      }), Ji = ea("toUpperCase");
      function Va(e, n, t) {
        return e = ne(e), n = t ? u : n, n === u ? Ff(e) ? Xf(e) : Rf(e) : e.match(n) || [];
      }
      var ja = z(function(e, n) {
        try {
          return Me(e, u, n);
        } catch (t) {
          return Xi(t) ? t : new N(t);
        }
      }), _v = vn(function(e, n) {
        return Ge(n, function(t) {
          t = fn(t), dn(e, t, Gi(e[t], e));
        }), e;
      });
      function pv(e) {
        var n = e == null ? 0 : e.length, t = W();
        return e = n ? se(e, function(r) {
          if (typeof r[1] != "function")
            throw new Ye(b);
          return [t(r[0]), r[1]];
        }) : [], z(function(r) {
          for (var i = -1; ++i < n; ) {
            var o = e[i];
            if (Me(o[0], this, r))
              return Me(o[1], this, r);
          }
        });
      }
      function mv(e) {
        return zs(qe(e, R));
      }
      function Qi(e) {
        return function() {
          return e;
        };
      }
      function wv(e, n) {
        return e == null || e !== e ? n : e;
      }
      var yv = ta(), xv = ta(!0);
      function $e(e) {
        return e;
      }
      function Vi(e) {
        return Ol(typeof e == "function" ? e : qe(e, R));
      }
      function bv(e) {
        return $l(qe(e, R));
      }
      function Cv(e, n) {
        return Nl(e, qe(n, R));
      }
      var Av = z(function(e, n) {
        return function(t) {
          return At(t, e, n);
        };
      }), Sv = z(function(e, n) {
        return function(t) {
          return At(e, t, n);
        };
      });
      function ji(e, n, t) {
        var r = we(n), i = cr(n, r);
        t == null && !(ce(n) && (i.length || !r.length)) && (t = n, n = e, e = this, i = cr(n, we(n)));
        var o = !(ce(t) && "chain" in t) || !!t.chain, f = pn(e);
        return Ge(i, function(s) {
          var h = n[s];
          e[s] = h, f && (e.prototype[s] = function() {
            var v = this.__chain__;
            if (o || v) {
              var _ = e(this.__wrapped__), p = _.__actions__ = We(this.__actions__);
              return p.push({ func: h, args: arguments, thisArg: e }), _.__chain__ = v, _;
            }
            return h.apply(e, Cn([this.value()], arguments));
          });
        }), e;
      }
      function Tv() {
        return be._ === this && (be._ = Vf), this;
      }
      function eu() {
      }
      function Lv(e) {
        return e = D(e), z(function(n) {
          return Ml(n, e);
        });
      }
      var Iv = Wi(se), Rv = Wi(rl), Ev = Wi(ti);
      function eo(e) {
        return Fi(e) ? ri(fn(e)) : lc(e);
      }
      function Wv(e) {
        return function(n) {
          return e == null ? u : Fn(e, n);
        };
      }
      var Ov = ia(), Bv = ia(!0);
      function nu() {
        return [];
      }
      function tu() {
        return !1;
      }
      function $v() {
        return {};
      }
      function Nv() {
        return "";
      }
      function Mv() {
        return !0;
      }
      function Pv(e, n) {
        if (e = D(e), e < 1 || e > xn)
          return [];
        var t = ln, r = Te(e, ln);
        n = W(n), e -= ln;
        for (var i = li(r, n); ++t < e; )
          n(t);
        return i;
      }
      function Fv(e) {
        return P(e) ? se(e, fn) : De(e) ? [e] : We(ya(ne(e)));
      }
      function Dv(e) {
        var n = ++Jf;
        return ne(e) + n;
      }
      var Uv = pr(function(e, n) {
        return e + n;
      }, 0), Hv = Oi("ceil"), kv = pr(function(e, n) {
        return e / n;
      }, 1), zv = Oi("floor");
      function Gv(e) {
        return e && e.length ? sr(e, $e, pi) : u;
      }
      function Yv(e, n) {
        return e && e.length ? sr(e, W(n, 2), pi) : u;
      }
      function Xv(e) {
        return ll(e, $e);
      }
      function qv(e, n) {
        return ll(e, W(n, 2));
      }
      function Kv(e) {
        return e && e.length ? sr(e, $e, xi) : u;
      }
      function Zv(e, n) {
        return e && e.length ? sr(e, W(n, 2), xi) : u;
      }
      var Jv = pr(function(e, n) {
        return e * n;
      }, 1), Qv = Oi("round"), Vv = pr(function(e, n) {
        return e - n;
      }, 0);
      function jv(e) {
        return e && e.length ? ui(e, $e) : 0;
      }
      function e_(e, n) {
        return e && e.length ? ui(e, W(n, 2)) : 0;
      }
      return l.after = bd, l.ary = Wa, l.assign = fg, l.assignIn = Ya, l.assignInWith = Er, l.assignWith = sg, l.at = cg, l.before = Oa, l.bind = Gi, l.bindAll = _v, l.bindKey = Ba, l.castArray = $d, l.chain = Ia, l.chunk = zc, l.compact = Gc, l.concat = Yc, l.cond = pv, l.conforms = mv, l.constant = Qi, l.countBy = jh, l.create = hg, l.curry = $a, l.curryRight = Na, l.debounce = Ma, l.defaults = dg, l.defaultsDeep = gg, l.defer = Cd, l.delay = Ad, l.difference = Xc, l.differenceBy = qc, l.differenceWith = Kc, l.drop = Zc, l.dropRight = Jc, l.dropRightWhile = Qc, l.dropWhile = Vc, l.fill = jc, l.filter = nd, l.flatMap = id, l.flatMapDeep = ud, l.flatMapDepth = ld, l.flatten = Aa, l.flattenDeep = eh, l.flattenDepth = nh, l.flip = Sd, l.flow = yv, l.flowRight = xv, l.fromPairs = th, l.functions = xg, l.functionsIn = bg, l.groupBy = ad, l.initial = ih, l.intersection = uh, l.intersectionBy = lh, l.intersectionWith = ah, l.invert = Ag, l.invertBy = Sg, l.invokeMap = fd, l.iteratee = Vi, l.keyBy = sd, l.keys = we, l.keysIn = Be, l.map = Ar, l.mapKeys = Lg, l.mapValues = Ig, l.matches = bv, l.matchesProperty = Cv, l.memoize = Tr, l.merge = Rg, l.mergeWith = Xa, l.method = Av, l.methodOf = Sv, l.mixin = ji, l.negate = Lr, l.nthArg = Lv, l.omit = Eg, l.omitBy = Wg, l.once = Td, l.orderBy = cd, l.over = Iv, l.overArgs = Ld, l.overEvery = Rv, l.overSome = Ev, l.partial = Yi, l.partialRight = Pa, l.partition = hd, l.pick = Og, l.pickBy = qa, l.property = eo, l.propertyOf = Wv, l.pull = ch, l.pullAll = Ta, l.pullAllBy = hh, l.pullAllWith = dh, l.pullAt = gh, l.range = Ov, l.rangeRight = Bv, l.rearg = Id, l.reject = vd, l.remove = vh, l.rest = Rd, l.reverse = ki, l.sampleSize = pd, l.set = $g, l.setWith = Ng, l.shuffle = md, l.slice = _h, l.sortBy = xd, l.sortedUniq = Ch, l.sortedUniqBy = Ah, l.split = iv, l.spread = Ed, l.tail = Sh, l.take = Th, l.takeRight = Lh, l.takeRightWhile = Ih, l.takeWhile = Rh, l.tap = Gh, l.throttle = Wd, l.thru = Cr, l.toArray = ka, l.toPairs = Ka, l.toPairsIn = Za, l.toPath = Fv, l.toPlainObject = Ga, l.transform = Mg, l.unary = Od, l.union = Eh, l.unionBy = Wh, l.unionWith = Oh, l.uniq = Bh, l.uniqBy = $h, l.uniqWith = Nh, l.unset = Pg, l.unzip = zi, l.unzipWith = La, l.update = Fg, l.updateWith = Dg, l.values = it, l.valuesIn = Ug, l.without = Mh, l.words = Va, l.wrap = Bd, l.xor = Ph, l.xorBy = Fh, l.xorWith = Dh, l.zip = Uh, l.zipObject = Hh, l.zipObjectDeep = kh, l.zipWith = zh, l.entries = Ka, l.entriesIn = Za, l.extend = Ya, l.extendWith = Er, ji(l, l), l.add = Uv, l.attempt = ja, l.camelCase = Gg, l.capitalize = Ja, l.ceil = Hv, l.clamp = Hg, l.clone = Nd, l.cloneDeep = Pd, l.cloneDeepWith = Fd, l.cloneWith = Md, l.conformsTo = Dd, l.deburr = Qa, l.defaultTo = wv, l.divide = kv, l.endsWith = Yg, l.eq = tn, l.escape = Xg, l.escapeRegExp = qg, l.every = ed, l.find = td, l.findIndex = ba, l.findKey = vg, l.findLast = rd, l.findLastIndex = Ca, l.findLastKey = _g, l.floor = zv, l.forEach = Ra, l.forEachRight = Ea, l.forIn = pg, l.forInRight = mg, l.forOwn = wg, l.forOwnRight = yg, l.get = Ki, l.gt = Ud, l.gte = Hd, l.has = Cg, l.hasIn = Zi, l.head = Sa, l.identity = $e, l.includes = od, l.indexOf = rh, l.inRange = kg, l.invoke = Tg, l.isArguments = Hn, l.isArray = P, l.isArrayBuffer = kd, l.isArrayLike = Oe, l.isArrayLikeObject = ve, l.isBoolean = zd, l.isBuffer = En, l.isDate = Gd, l.isElement = Yd, l.isEmpty = Xd, l.isEqual = qd, l.isEqualWith = Kd, l.isError = Xi, l.isFinite = Zd, l.isFunction = pn, l.isInteger = Fa, l.isLength = Ir, l.isMap = Da, l.isMatch = Jd, l.isMatchWith = Qd, l.isNaN = Vd, l.isNative = jd, l.isNil = ng, l.isNull = eg, l.isNumber = Ua, l.isObject = ce, l.isObjectLike = de, l.isPlainObject = Et, l.isRegExp = qi, l.isSafeInteger = tg, l.isSet = Ha, l.isString = Rr, l.isSymbol = De, l.isTypedArray = rt, l.isUndefined = rg, l.isWeakMap = ig, l.isWeakSet = ug, l.join = oh, l.kebabCase = Kg, l.last = Ze, l.lastIndexOf = fh, l.lowerCase = Zg, l.lowerFirst = Jg, l.lt = lg, l.lte = ag, l.max = Gv, l.maxBy = Yv, l.mean = Xv, l.meanBy = qv, l.min = Kv, l.minBy = Zv, l.stubArray = nu, l.stubFalse = tu, l.stubObject = $v, l.stubString = Nv, l.stubTrue = Mv, l.multiply = Jv, l.nth = sh, l.noConflict = Tv, l.noop = eu, l.now = Sr, l.pad = Qg, l.padEnd = Vg, l.padStart = jg, l.parseInt = ev, l.random = zg, l.reduce = dd, l.reduceRight = gd, l.repeat = nv, l.replace = tv, l.result = Bg, l.round = Qv, l.runInContext = c, l.sample = _d, l.size = wd, l.snakeCase = rv, l.some = yd, l.sortedIndex = ph, l.sortedIndexBy = mh, l.sortedIndexOf = wh, l.sortedLastIndex = yh, l.sortedLastIndexBy = xh, l.sortedLastIndexOf = bh, l.startCase = uv, l.startsWith = lv, l.subtract = Vv, l.sum = jv, l.sumBy = e_, l.template = av, l.times = Pv, l.toFinite = mn, l.toInteger = D, l.toLength = za, l.toLower = ov, l.toNumber = Je, l.toSafeInteger = og, l.toString = ne, l.toUpper = fv, l.trim = sv, l.trimEnd = cv, l.trimStart = hv, l.truncate = dv, l.unescape = gv, l.uniqueId = Dv, l.upperCase = vv, l.upperFirst = Ji, l.each = Ra, l.eachRight = Ea, l.first = Sa, ji(l, function() {
        var e = {};
        return an(l, function(n, t) {
          re.call(l.prototype, t) || (e[t] = n);
        }), e;
      }(), { chain: !1 }), l.VERSION = w, Ge(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        l[e].placeholder = l;
      }), Ge(["drop", "take"], function(e, n) {
        X.prototype[e] = function(t) {
          t = t === u ? 1 : me(D(t), 0);
          var r = this.__filtered__ && !n ? new X(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = Te(t, r.__takeCount__) : r.__views__.push({
            size: Te(t, ln),
            type: e + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, X.prototype[e + "Right"] = function(t) {
          return this.reverse()[e](t).reverse();
        };
      }), Ge(["filter", "map", "takeWhile"], function(e, n) {
        var t = n + 1, r = t == ot || t == fo;
        X.prototype[e] = function(i) {
          var o = this.clone();
          return o.__iteratees__.push({
            iteratee: W(i, 3),
            type: t
          }), o.__filtered__ = o.__filtered__ || r, o;
        };
      }), Ge(["head", "last"], function(e, n) {
        var t = "take" + (n ? "Right" : "");
        X.prototype[e] = function() {
          return this[t](1).value()[0];
        };
      }), Ge(["initial", "tail"], function(e, n) {
        var t = "drop" + (n ? "" : "Right");
        X.prototype[e] = function() {
          return this.__filtered__ ? new X(this) : this[t](1);
        };
      }), X.prototype.compact = function() {
        return this.filter($e);
      }, X.prototype.find = function(e) {
        return this.filter(e).head();
      }, X.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, X.prototype.invokeMap = z(function(e, n) {
        return typeof e == "function" ? new X(this) : this.map(function(t) {
          return At(t, e, n);
        });
      }), X.prototype.reject = function(e) {
        return this.filter(Lr(W(e)));
      }, X.prototype.slice = function(e, n) {
        e = D(e);
        var t = this;
        return t.__filtered__ && (e > 0 || n < 0) ? new X(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== u && (n = D(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
      }, X.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, X.prototype.toArray = function() {
        return this.take(ln);
      }, an(X.prototype, function(e, n) {
        var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), i = l[r ? "take" + (n == "last" ? "Right" : "") : n], o = r || /^find/.test(n);
        !i || (l.prototype[n] = function() {
          var f = this.__wrapped__, s = r ? [1] : arguments, h = f instanceof X, v = s[0], _ = h || P(f), p = function(Y) {
            var q = i.apply(l, Cn([Y], s));
            return r && S ? q[0] : q;
          };
          _ && t && typeof v == "function" && v.length != 1 && (h = _ = !1);
          var S = this.__chain__, E = !!this.__actions__.length, O = o && !S, H = h && !E;
          if (!o && _) {
            f = H ? f : new X(this);
            var B = e.apply(f, s);
            return B.__actions__.push({ func: Cr, args: [p], thisArg: u }), new Xe(B, S);
          }
          return O && H ? e.apply(this, s) : (B = this.thru(p), O ? r ? B.value()[0] : B.value() : B);
        });
      }), Ge(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Zt[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
        l.prototype[e] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var o = this.value();
            return n.apply(P(o) ? o : [], i);
          }
          return this[t](function(f) {
            return n.apply(P(f) ? f : [], i);
          });
        };
      }), an(X.prototype, function(e, n) {
        var t = l[n];
        if (t) {
          var r = t.name + "";
          re.call(Vn, r) || (Vn[r] = []), Vn[r].push({ name: n, func: t });
        }
      }), Vn[_r(u, xe).name] = [{
        name: "wrapper",
        func: u
      }], X.prototype.clone = gs, X.prototype.reverse = vs, X.prototype.value = _s, l.prototype.at = Yh, l.prototype.chain = Xh, l.prototype.commit = qh, l.prototype.next = Kh, l.prototype.plant = Jh, l.prototype.reverse = Qh, l.prototype.toJSON = l.prototype.valueOf = l.prototype.value = Vh, l.prototype.first = l.prototype.head, pt && (l.prototype[pt] = Zh), l;
    }, Zn = qf();
    Bn ? ((Bn.exports = Zn)._ = Zn, Vr._ = Zn) : be._ = Zn;
  }).call(Wt);
})(wu, wu.exports);
const Or = wu.exports, M = (a) => {
  if (!!a)
    return Or.isNumber(a) ? `${a}px` : a;
}, Au = () => {
  const a = n_();
  return (x, u) => {
    var A;
    return u || (u = a == null ? void 0 : a.slots), (((A = u == null ? void 0 : u.default) == null ? void 0 : A.call(u)) || []).map((y) => y.children && Array.isArray(y.children) ? y.children : y).flat().filter((y) => {
      var b;
      return (b = y.type.name) == null ? void 0 : b.endsWith(x);
    });
  };
}, Br = /* @__PURE__ */ fe({
  __name: "icon",
  props: {
    name: { default: "UserAvatar" },
    size: null,
    color: null,
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(a, { emit: x }) {
    const u = F(() => [
      "i-icon",
      `icon-${a.name}`,
      a.disabled && "i-icon-is-disabled"
    ]), w = F(() => ({
      color: a.color || void 0,
      fontSize: M(a.size)
    }));
    return (A, y) => (Q(), ie("i", {
      class: un(ge(u)),
      style: yn(ge(w))
    }, null, 6));
  }
});
const iu = {
  install(a) {
    a.component("i-icon", Br);
  }
};
const u_ = fe({
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
    slots: x
  }) {
    return () => {
      var w;
      const u = (w = x.default) == null ? void 0 : w.call(x);
      return k("div", {
        class: ["i-divider", a.dashed && "i-divider--dashed", u && "i-divider--with-text", u && `i-divider--with-text-${a.align}`]
      }, [u && k("span", {
        class: "i-divider--text"
      }, [u])]);
    };
  }
}), uu = {
  install(a) {
    a.component("i-divider", u_);
  }
}, l_ = /* @__PURE__ */ fe({
  __name: "grid",
  props: {
    align: { default: "top" },
    gutter: null,
    justify: { default: "start" }
  },
  setup(a) {
    const x = F(() => [
      "i-grid",
      a.align && `i-grid--align-${a.align}`,
      a.justify && `i-grid--justify-${a.justify}`
    ]);
    return lt("gutter", a.gutter), (u, w) => (Q(), ie("div", {
      class: un(ge(x))
    }, [
      ye(u.$slots, "default", { gutter: a.gutter })
    ], 2));
  }
});
const a_ = /* @__PURE__ */ fe({
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
    const x = (y) => {
      let b = parseInt(y.toString());
      return b > 24 && (b = 24), b < 0 && (b = 0), b;
    }, u = F(() => [
      "i-grid__item",
      `i-grid__item--span-${x(a.span)}`,
      a.offset && `i-grid__item--offset-${x(a.offset)}`,
      a.order && `i-grid__item--order-${x(a.order)}`,
      a.align && `i-grid__item--align-${a.align}`
    ]), w = at("gutter"), A = F(() => [
      {
        paddingLeft: M(a.gutter) || M(w),
        paddingRight: M(a.gutter) || M(w),
        flex: a.width ? `0 0 ${M(a.width)}` : "1",
        maxWidth: a.width && M(a.width)
      }
    ]);
    return (y, b) => (Q(), ie("div", {
      class: un(ge(u)),
      style: yn(ge(A))
    }, [
      ye(y.$slots, "default")
    ], 6));
  }
});
const lu = {
  install(a) {
    a.component("i-grid", l_), a.component("i-grid-item", a_);
  }
}, o_ = /* @__PURE__ */ fe({
  __name: "layout",
  setup(a) {
    const x = oe([]), u = F(() => [
      "i-layout",
      x.value.length > 0 && "i-layout-has-aside"
    ]);
    return lt("layoutCtx", {
      onAsideMount: (w) => x.value.push(w),
      onAsideUnMount: (w) => {
        x.value = x.value.filter((A) => A !== w);
      }
    }), (w, A) => (Q(), ie("div", {
      class: un(ge(u))
    }, [
      ye(w.$slots, "default")
    ], 2));
  }
});
const f_ = /* @__PURE__ */ fe({
  __name: "layout-aside",
  props: {
    width: { default: 240 }
  },
  setup(a) {
    const u = (() => {
      let b = 0;
      return (L = "") => (b += 1, `${L}${b}`);
    })()("i_layout_aside"), w = at("layoutCtx");
    $t(() => {
      var b;
      (b = w == null ? void 0 : w.onAsideMount) == null || b.call(w, u);
    }), yu(() => {
      var b;
      (b = w == null ? void 0 : w.onAsideUnMount) == null || b.call(w, u);
    });
    const A = M(a.width), y = F(() => [
      {
        width: A,
        maxWidth: A,
        minWidth: A,
        flex: `0 0 ${A}`
      }
    ]);
    return (b, L) => (Q(), ie("aside", {
      class: "i-layout--aside",
      style: yn(ge(y))
    }, [
      ye(b.$slots, "default")
    ], 4));
  }
});
const Nr = (a, x) => {
  const u = a.__vccOpts || a;
  for (const [w, A] of x)
    u[w] = A;
  return u;
}, s_ = {}, c_ = { class: "i-layout--content" };
function h_(a, x) {
  return Q(), ie("main", c_, [
    ye(a.$slots, "default")
  ]);
}
const d_ = /* @__PURE__ */ Nr(s_, [["render", h_]]);
const g_ = {}, v_ = { class: "i-layout--footer" };
function __(a, x) {
  return Q(), ie("footer", v_, [
    ye(a.$slots, "default")
  ]);
}
const p_ = /* @__PURE__ */ Nr(g_, [["render", __]]);
const m_ = {}, w_ = { class: "i-layout--header" };
function y_(a, x) {
  return Q(), ie("header", w_, [
    ye(a.$slots, "default")
  ]);
}
const x_ = /* @__PURE__ */ Nr(m_, [["render", y_]]), au = {
  install(a) {
    a.component("i-layout", o_), a.component("i-layout-aside", f_), a.component("i-layout-content", d_), a.component("i-layout-footer", p_), a.component("i-layout-header", x_);
  }
}, b_ = /* @__PURE__ */ fe({
  __name: "scrollbar",
  props: {
    height: null,
    width: null
  },
  emits: ["scrollX", "scrollY"],
  setup(a, { emit: x }) {
    const u = xu({
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
    }), w = oe(null);
    Wr(() => {
      var Ne, Qe, Wn, Mt, Pt, ot;
      const $ = ((Ne = w.value) == null ? void 0 : Ne.clientWidth) || 0, J = ((Qe = w.value) == null ? void 0 : Qe.clientHeight) || 0;
      u.viewCurrentWidth = $, u.viewCurrentHeight = J;
      const C = (((Wn = w.value) == null ? void 0 : Wn.scrollWidth) || 0) - $, U = (((Mt = w.value) == null ? void 0 : Mt.scrollHeight) || 0) - J;
      u.viewWidth = C, u.viewHeight = U;
      const V = ($ - 4) ** 2 / (((Pt = w.value) == null ? void 0 : Pt.scrollWidth) || 1);
      u.thumbWidth = V, u.scaleX = ($ - V - 4) / V;
      const Se = (J - 4) ** 2 / (((ot = w.value) == null ? void 0 : ot.scrollHeight) || 1);
      u.thumbHeight = Se, u.scaleY = (J - Se - 4) / Se;
    });
    const A = oe(0), y = oe(0), b = ($) => {
      A.value !== Number($.toFixed(4)) && x("scrollX", Number($.toFixed(4)) || 0), A.value = Number($.toFixed(4));
    }, L = ($) => {
      y.value !== Number($.toFixed(4)) && x("scrollY", Number($.toFixed(4)) || 0), y.value = Number($.toFixed(4));
    }, K = ($) => {
      if (u.autoScroll) {
        const J = $.target.scrollLeft / u.viewWidth || 0, C = $.target.scrollTop / u.viewHeight || 0;
        b(J), L(C), u.thumbLeft = J * u.scaleX * u.thumbWidth, u.thumbTop = C * u.scaleY * u.thumbHeight;
      }
    }, T = oe(0), m = oe(0), R = ($) => {
      var Se, Ne, Qe;
      const J = u.viewCurrentWidth - u.thumbWidth - 4;
      T.value += $.movementX, T.value < 0 && (T.value = 0), T.value > J && (T.value = J), u.thumbLeft = T.value;
      const C = u.viewCurrentHeight - u.thumbHeight - 4;
      m.value += $.movementY, m.value < 0 && (m.value = 0), m.value > C && (m.value = C), u.thumbTop = m.value;
      const U = (((Se = w.value) == null ? void 0 : Se.scrollLeft) || 0) / u.viewWidth || 0, V = (((Ne = w.value) == null ? void 0 : Ne.scrollTop) || 0) / u.viewHeight || 0;
      b(U), L(V), (Qe = w.value) == null || Qe.scrollTo({
        left: (T.value + u.thumbWidth * U) * u.scaleX,
        top: (m.value + u.thumbHeight * V) * u.scaleY
      });
    }, G = () => {
      u.downShowThumb = !1, u.autoScroll = !0, window.removeEventListener("mouseup", G), window.removeEventListener("mousemove", R);
    }, Z = () => {
      u.downShowThumb = !0, u.autoScroll = !1, T.value = u.thumbLeft, m.value = u.thumbTop, window.addEventListener("mouseup", G), window.addEventListener("mousemove", R);
    }, te = ($) => {
      var C;
      const J = $.clientX - $.target.getBoundingClientRect().left;
      u.thumbLeft = J, A.value = 0, setTimeout(() => {
        var V;
        const U = (((V = w.value) == null ? void 0 : V.scrollLeft) || 0) / u.viewWidth || 0;
        b(U);
      }), (C = w.value) == null || C.scrollTo({
        left: J * u.scaleX
      });
    }, he = ($) => {
      var C;
      const J = $.clientY - $.target.getBoundingClientRect().top;
      u.thumbTop = J, y.value = 0, setTimeout(() => {
        var V;
        const U = (((V = w.value) == null ? void 0 : V.scrollTop) || 0) / u.viewHeight || 0;
        L(U);
      }), (C = w.value) == null || C.scrollTo({
        top: J * u.scaleY
      });
    }, ee = F(() => [
      {
        maxHeight: a.height ? M(a.height) : "auto",
        maxWidth: a.width ? M(a.width) : "auto",
        userSelect: u.autoScroll ? "unset" : "none"
      }
    ]), xe = F(() => [
      {
        height: M(u.thumbHeight),
        transform: `translateY(${u.thumbTop}px)`
      }
    ]), ke = F(() => [
      {
        width: M(u.thumbWidth),
        transform: `translateX(${u.thumbLeft}px)`
      }
    ]);
    return ($, J) => (Q(), ie("div", {
      class: "i-scrollbar",
      onMouseenter: J[0] || (J[0] = (C) => u.hoverShowThumb = !0),
      onMouseleave: J[1] || (J[1] = (C) => u.hoverShowThumb = !1)
    }, [
      ut("div", {
        ref_key: "scrollWrap",
        ref: w,
        class: "i-scrollbar__wrap",
        style: yn(ge(ee)),
        onScroll: K
      }, [
        ye($.$slots, "default")
      ], 36),
      a.height ? (Q(), ie("div", {
        key: 0,
        class: "i-scrollbar__barY",
        onClick: he
      }, [
        k(Nt, { name: "i-fade" }, {
          default: kn(() => [
            u.hoverShowThumb || u.downShowThumb ? (Q(), ie("div", {
              key: 0,
              class: "i-scrollbar__thumbY",
              style: yn(ge(xe)),
              onMousedown: Z
            }, null, 36)) : Ae("", !0)
          ]),
          _: 1
        })
      ])) : Ae("", !0),
      a.width ? (Q(), ie("div", {
        key: 1,
        class: "i-scrollbar__barX",
        onClick: te
      }, [
        k(Nt, { name: "i-fade" }, {
          default: kn(() => [
            u.hoverShowThumb || u.downShowThumb ? (Q(), ie("div", {
              key: 0,
              class: "i-scrollbar__thumbX",
              style: yn(ge(ke)),
              onMousedown: Z
            }, null, 36)) : Ae("", !0)
          ]),
          _: 1
        })
      ])) : Ae("", !0)
    ], 32));
  }
});
const ou = {
  install(a) {
    a.component("i-scrollbar", b_);
  }
}, C_ = fe({
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
  setup(a, { emit: x }) {
    return {
      cls: F(() => ["i-dropdown"])
    };
  }
});
function A_(a, x, u, w, A, y) {
  return Q(), ie("div", {
    class: un(a.cls)
  }, [
    ye(a.$slots, "default")
  ], 2);
}
const S_ = /* @__PURE__ */ Nr(C_, [["render", A_]]), fu = {
  install(a) {
    a.component("i-dropdown", S_);
  }
};
const T_ = fe({
  name: "Breadcrumb",
  props: {
    maxItemWidth: [String, Number],
    separator: [String, HTMLElement]
  },
  setup(a, {
    slots: x
  }) {
    return lt("breadcrumbCtx", {
      maxItemWidth: a.maxItemWidth,
      slots: x
    }), () => {
      var u;
      return k("div", {
        class: "i-breadcrumb"
      }, [(u = x.default) == null ? void 0 : u.call(x)]);
    };
  }
}), L_ = fe({
  name: "BreadcrumbItem",
  props: {
    disabled: Boolean,
    maxItemWidth: [String, Number],
    maxWidth: [String, Number]
  },
  setup(a, {
    slots: x
  }) {
    const u = at("breadcrumbCtx", void 0), w = F(() => {
      let y;
      a.maxWidth && (y = M(a.maxWidth));
      let b;
      return u != null && u.maxItemWidth ? b = M(u == null ? void 0 : u.maxItemWidth) : a.maxItemWidth && (b = M(a.maxItemWidth)), {
        maxWidth: y || b || "200px"
      };
    }), A = F(() => {
      var y, b, L;
      return (L = (b = u == null ? void 0 : (y = u.slots).separator) == null ? void 0 : b.call(y)) != null ? L : k(Br, {
        name: "ArrowRight",
        size: 16
      }, null);
    });
    return () => {
      var b;
      const y = (b = x.default) == null ? void 0 : b.call(x);
      return k("div", {
        class: ["i-breadcrumb__item", a.disabled && "i-breadcrumb-is-disabled"]
      }, [k("span", {
        class: "i-breadcrumb__inner",
        style: w.value
      }, [y]), k("span", {
        class: "i-breadcrumb__separator"
      }, [A.value])]);
    };
  }
}), su = {
  install(a) {
    a.component("i-breadcrumb", T_), a.component("i-breadcrumb-item", L_);
  }
}, I_ = /* @__PURE__ */ fe({
  __name: "back-top",
  props: {
    target: null,
    visibleHeight: { default: 0 },
    smooth: { type: Boolean, default: !0 }
  },
  emits: ["click", "scroll"],
  setup(a, { emit: x }) {
    const u = !a.target, w = oe(!(a.visibleHeight > 0)), A = (L) => Or.isString(L) ? document.querySelector(L) : u ? document == null ? void 0 : document.documentElement : L, y = Or.throttle((L) => {
      L.target.scrollTop >= a.visibleHeight ? w.value = !0 : w.value = !1, x("scroll");
    }, 16);
    $t(() => {
      const L = A(a.target);
      L == null || L.addEventListener("scroll", y);
    });
    const b = () => {
      const L = A(a.target);
      L == null || L.scrollTo({
        top: 0,
        behavior: a.smooth ? "smooth" : "auto"
      }), x("click");
    };
    return (L, K) => {
      const T = Bt("i-icon"), m = Bt("i-button");
      return Q(), ie("div", {
        class: "'i-back-top'",
        onClick: b
      }, [
        k(Nt, { name: "i-fade" }, {
          default: kn(() => [
            w.value && L.$slots.default ? ye(L.$slots, "default", { key: 0 }) : Ae("", !0)
          ]),
          _: 3
        }),
        k(Nt, { name: "i-fade" }, {
          default: kn(() => [
            w.value && !L.$slots.default ? (Q(), $r(m, {
              key: 0,
              shape: "circle",
              class: "i-back-top--button"
            }, {
              default: kn(() => [
                k(T, { name: "ArrowUpBold" })
              ]),
              _: 1
            })) : Ae("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const cu = {
  install(a) {
    a.component("i-back-top", I_);
  }
};
const uo = fe({
  name: "Radio",
  props: {
    type: {
      type: String
    },
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
    change: (a, x) => !0
  },
  setup(a, {
    slots: x,
    emit: u
  }) {
    const w = oe(a.defaultChecked), A = F(() => {
      var m;
      return (m = a.checked) != null ? m : w.value;
    }), y = at("radioGroupCtx", void 0), b = F(() => a.type || (y == null ? void 0 : y.type) || "radio"), L = F(() => a.size || (y == null ? void 0 : y.size) || "medium"), K = F(() => a.disabled || (y == null ? void 0 : y.disabled) || !1), T = (m) => {
      if (K.value)
        return;
      const R = m.target.checked;
      w.value = R, u("change", R, m);
    };
    return () => {
      var R;
      const m = (R = x.default) == null ? void 0 : R.call(x);
      return k("label", {
        class: [`i-${b.value}`, A.value && `i-${b.value}-is-checked`, K.value && `i-${b.value}-is-disabled`, L.value && `i-${b.value}--size-${L.value}`]
      }, [k("input", {
        readonly: !0,
        type: "radio",
        class: `i-${b.value}__former`,
        checked: A.value,
        disabled: K.value,
        value: a.value,
        onClick: (G) => G.stopPropagation(),
        onChange: T
      }, null), k("span", {
        class: `i-${b.value}__input`
      }, null), k("span", {
        class: `i-${b.value}__label`
      }, [m])]);
    };
  }
});
function R_(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !bu(a);
}
const E_ = fe({
  name: "RadioGroup",
  props: {
    checked: [String, Number],
    defaultChecked: {
      type: [String, Number],
      default: void 0
    },
    type: String,
    size: String,
    disabled: Boolean
  },
  emits: {
    change: (a, x) => !0
  },
  setup(a, {
    slots: x,
    emit: u
  }) {
    const A = Au()("Radio"), b = oe((() => {
      let T = a.defaultChecked;
      return !T && A.map((m, R) => {
        R === 0 && (T = m.props.value);
      }), T;
    })()), L = F(() => {
      var T;
      return (T = a.checked) != null ? T : b.value;
    }), K = () => A.map((T, m) => {
      let R;
      const G = T.props.value;
      return k(uo, ro({
        checked: L.value === G,
        onChange: (Z, te) => {
          b.value = G, u("change", G, te);
        }
      }, T.props), R_(R = T.children.default()) ? R : {
        default: () => [R]
      });
    });
    return lt("radioGroupCtx", {
      type: a.type,
      size: a.size,
      disabled: a.disabled
    }), () => k("div", {
      class: "i-radio-group"
    }, [K()]);
  }
}), hu = {
  install(a) {
    a.component("i-radio", uo), a.component("i-radio-group", E_);
  }
};
const lo = fe({
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
    change: (a, x) => !0
  },
  setup(a, {
    slots: x,
    emit: u
  }) {
    const w = oe(a.defaultChecked), A = F(() => {
      var T;
      return (T = a.checked) != null ? T : w.value;
    }), y = at("checkboxGroupCtx", void 0), b = F(() => a.size || (y == null ? void 0 : y.size) || "medium"), L = F(() => a.disabled || (y == null ? void 0 : y.disabled) || !1), K = (T) => {
      if (L.value)
        return;
      const m = T.target.checked;
      w.value = m, u("change", m, T);
    };
    return () => {
      var m;
      const T = (m = x.default) == null ? void 0 : m.call(x);
      return k("label", {
        class: ["i-checkbox", A.value && "i-checkbox-is-checked", L.value && "i-checkbox-is-disabled", b.value && `i-checkbox--size-${b.value}`]
      }, [k("input", {
        readonly: !0,
        type: "checkbox",
        class: "i-checkbox__former",
        checked: A.value,
        disabled: L.value,
        value: a.value,
        onClick: (R) => R.stopPropagation(),
        onChange: K
      }, null), k("span", {
        class: "i-checkbox__input"
      }, null), k("span", {
        class: "i-checkbox__label"
      }, [T])]);
    };
  }
});
function W_(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !bu(a);
}
const O_ = fe({
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
    change: (a, x) => !0
  },
  setup(a, {
    slots: x,
    emit: u
  }) {
    const w = oe(a.defaultValue), A = F(() => {
      var T;
      return (T = a.value) != null ? T : w.value;
    });
    let y = new Set([].concat(A.value));
    const L = Au()("Checkbox"), K = () => L.map((T, m) => {
      let R;
      const G = T.props.value;
      return k(lo, ro({
        checked: A.value.includes(G),
        onChange: (Z, te) => {
          Z ? y.add(G) : y.delete(G), w.value = Array.from(y), u("change", Array.from(y), te);
        }
      }, T.props), W_(R = T.children.default()) ? R : {
        default: () => [R]
      });
    });
    return lt("checkboxGroupCtx", {
      size: a.size,
      disabled: a.disabled
    }), () => k("div", {
      class: "i-checkbox-group"
    }, [K()]);
  }
}), du = {
  install(a) {
    a.component("i-checkbox", lo), a.component("i-checkbox-group", O_);
  }
}, B_ = ["src"], $_ = /* @__PURE__ */ fe({
  __name: "avatar",
  props: {
    image: null,
    size: null,
    shape: null,
    color: null
  },
  setup(a) {
    const x = at("avatarGroupCtx", void 0), u = F(() => (a.size ? a.size : x == null ? void 0 : x.size) || 32), w = F(() => (a.shape ? a.shape : x == null ? void 0 : x.shape) || "circle"), A = F(() => a.color ? a.color : x == null ? void 0 : x.color), y = oe(!0), b = () => {
      y.value = !1;
    }, L = F(() => [
      "i-avatar",
      w.value === "round" && `i-avatar__shape-${w.value}`
    ]), K = F(() => [
      {
        width: M(u.value),
        height: M(u.value),
        background: M(A.value)
      }
    ]);
    return (T, m) => {
      const R = Bt("i-icon");
      return Q(), ie("div", {
        class: un(ge(L)),
        style: yn(ge(K))
      }, [
        a.image && y.value ? (Q(), ie("img", {
          key: 0,
          class: "i-avatar__image",
          src: a.image,
          onError: b,
          referrerPolicy: "no-referrer"
        }, null, 40, B_)) : Ae("", !0),
        (!a.image || !y.value) && T.$slots.default ? ye(T.$slots, "default", { key: 1 }) : Ae("", !0),
        (!a.image || !y.value) && !T.$slots.default ? (Q(), $r(R, {
          key: 2,
          name: "User",
          color: "#fff"
        })) : Ae("", !0)
      ], 6);
    };
  }
});
const N_ = /* @__PURE__ */ fe({
  __name: "avatar-group",
  props: {
    size: null,
    shape: null,
    color: null,
    cascading: { default: "right" }
  },
  setup(a) {
    lt("avatarGroupCtx", {
      size: a.size,
      shape: a.shape,
      color: a.color
    });
    const x = F(() => ["i-avatar-group", `i-avatar__offset-${a.cascading}`]);
    return (u, w) => (Q(), ie("div", {
      class: un(ge(x))
    }, [
      ye(u.$slots, "default")
    ], 2));
  }
});
const gu = {
  install(a) {
    a.component("i-avatar", $_), a.component("i-avatar-group", N_);
  }
}, M_ = { class: "i-badge" }, P_ = /* @__PURE__ */ fe({
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
    const x = () => typeof a.count == "number" && a.count > a.maxCount ? `${a.maxCount}+` : a.count;
    let u = !a.count;
    typeof a.count == "number" && (u = a.count < 1 && !a.showZero);
    const w = () => {
      const b = {};
      return a.offset && (a.offset[0] && (b.right = +a.offset[0]), a.offset[1] && (b.marginTop = +a.offset[1])), b;
    }, A = F(() => [
      "i-badge__content",
      a.dot ? "i-badge--dot" : a.shape && `i-badge--${a.shape}`,
      a.size === "small" && `i-badge__size-${a.size}`
    ]), y = F(() => [
      {
        background: a.color,
        ...w()
      }
    ]);
    return (b, L) => (Q(), ie("div", M_, [
      ye(b.$slots, "default"),
      ge(u) ? Ae("", !0) : (Q(), ie("sup", {
        key: 0,
        class: un(ge(A)),
        style: yn(ge(y))
      }, [
        a.dot ? Ae("", !0) : (Q(), ie(t_, { key: 0 }, [
          io(Cu(x()), 1)
        ], 64))
      ], 6))
    ]));
  }
});
const vu = {
  install(a) {
    a.component("i-badge", P_);
  }
};
const F_ = {
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
}, ao = fe({
  name: "CarouselItem",
  props: {
    ...F_
  },
  emits: {
    clickItem: (a) => !0
  },
  setup(a, {
    slots: x,
    emit: u
  }) {
    const w = F(() => a.type !== "card" ? 0 : a.innerCurrent === 0 && a.index === a.childrenLength - 1 ? -1 : a.innerCurrent === a.childrenLength - 1 && a.index === 0 ? a.childrenLength : a.index < a.innerCurrent - 1 && a.innerCurrent - a.index >= a.childrenLength / 2 ? a.childrenLength + 1 : a.index > a.innerCurrent + 1 && a.index - a.innerCurrent >= a.childrenLength / 2 ? -2 : a.index), A = 210 / 332, y = 0.415, b = F(() => {
      if (a.type !== "card")
        return 0;
      const m = a.wrapWidth, R = !L.value && a.childrenLength > 2 ? w.value : a.index;
      return Math.abs(R - a.innerCurrent) <= 1 ? m * ((R - a.innerCurrent) * (1 - y * A) - y + 1) / 2 : R < a.innerCurrent ? -y * (1 + A) * m / 2 : (2 + y * (A - 1)) * m / 2;
    }), L = F(() => a.index === a.innerCurrent), K = F(() => {
      if (a.type !== "card")
        return 0;
      const m = !L.value && a.childrenLength > 2 ? w.value : a.index, R = m === a.innerCurrent, G = Math.round(Math.abs(m - a.innerCurrent)) <= 1;
      return R ? 2 : G ? 1 : 0;
    }), T = F(() => {
      if (a.type === "card") {
        const R = (!L.value && a.childrenLength > 2 ? w.value : a.index) === a.innerCurrent;
        return {
          transform: `translateX(${b.value}px) scale(${R ? 1 : A})`,
          transition: `transform ${a.duration / 1e3}s ease`,
          zIndex: K.value
        };
      }
      return {};
    });
    return () => {
      var R;
      const m = (R = x.default) == null ? void 0 : R.call(x);
      return k("li", {
        class: "i-carousel-item",
        style: T.value,
        onClick: () => {
          u("clickItem", a.index);
        }
      }, [m]);
    };
  }
}), D_ = fe({
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
    slots: x,
    emit: u
  }) {
    const w = F(() => Or.range(0, a.itemNum)), A = (y) => {
      u("enter", y);
    };
    return () => k("ul", {
      class: "i-carousel__navigation"
    }, [w.value.map((y) => k("li", {
      class: ["i-carousel__navigation-item", a.current - 1 === y && "i-carousel__navigation-item__active"],
      onMouseenter: () => A(y),
      key: y
    }, null))]);
  }
});
function U_(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !bu(a);
}
const H_ = fe({
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
    emit: x
  }) {
    const u = oe(0), w = oe(0), A = oe(!1), y = oe(null), b = oe(0), L = oe(!1), K = () => {
      const U = Au()("CarouselItem");
      w.value = U.length;
      const V = U.map((Se, Ne) => {
        let Qe;
        return k(ao, {
          index: Ne,
          innerCurrent: u.value,
          ifAnimation: A.value,
          childrenLength: w.value,
          wrapWidth: b.value,
          type: a.type,
          duration: a.duration,
          onClickItem: (Wn) => {
            a.type === "card" && (u.value = Wn, x("change", Wn));
          }
        }, U_(Qe = Se.children.default()) ? Qe : {
          default: () => [Qe]
        });
      });
      if (w.value > 0 && a.type === "default") {
        const Se = to(V[0], {
          key: -1
        }), Ne = to(V[V.length - 1], {
          key: w.value
        });
        V.unshift(Ne), V.push(Se);
      }
      return V;
    }, T = K().length, m = (C) => a.type === "default" ? C >= w.value ? 0 : C <= -1 ? w.value - 1 : C + 1 : C;
    $t(() => {
      u.value = m(a.defaultCurrent), b.value = y.value.getBoundingClientRect().width;
    });
    const R = (C, U) => {
      A.value = !0, u.value = C, U === "last" ? C > 0 ? x("change", C - 1) : x("change", w.value - 1) : C <= w.value ? x("change", C - 1) : x("change", 0);
    }, G = () => {
      a.stopOnHover && (L.value = !0);
    }, Z = () => {
      a.stopOnHover && (L.value = !1);
    };
    let te = 0;
    Ot(() => A.value, () => {
      A.value && (te && clearTimeout(te), te = setTimeout(() => {
        A.value = !1, te = 0, a.type !== "card" && (u.value + 1 >= T && (u.value = 1), u.value <= 0 && (u.value = T - 2));
      }, a.duration + 50));
    });
    let he = 0;
    const ee = () => {
      he && (clearTimeout(he), he = 0);
    }, xe = () => {
      !L.value && a.autoPlay && a.interval > 0 && (ee(), he = setTimeout(() => {
        R(u.value + 1);
      }, u.value === 0 ? a.interval * 1e3 - (a.duration + 50) : a.interval * 1e3));
    }, ke = F(() => [a.autoPlay, u.value, a.duration, a.interval]);
    Ot(() => ke.value, () => {
      xe();
    }), yu(() => {
      ee();
    });
    const $ = (C) => {
      if (A.value)
        return !1;
      if (C === "last")
        return u.value - 1 < 0 ? R(w.value - 1, "last") : R(u.value - 1, "last");
      if (C === "next")
        return a.type === "card" ? R(u.value + 1 >= T ? 0 : u.value + 1, "next") : R(u.value + 1, "next");
    }, J = () => {
      if (a.type !== "card")
        return a.direction === "vertical" ? {
          transform: `translate3d(0, -${u.value * 100}%, 0px)`,
          transition: A.value ? `transform ${a.duration / 1e3}s ease` : ""
        } : {
          transform: `translate3d(-${u.value * 100}%, 0px, 0px)`,
          transition: A.value ? `transform ${a.duration / 1e3}s ease` : ""
        };
    };
    return () => k("div", {
      class: ["i-carousel", a.direction === "vertical" && "i-carousel__vertical", a.type === "card" && "i-carousel__card"],
      style: {
        width: M(a.width),
        height: M(a.height)
      },
      ref: y
    }, [k("div", {
      class: "i-carousel__content",
      onMouseenter: G,
      onMouseleave: Z
    }, [k("ul", {
      class: "i-carousel__wrapper",
      style: J()
    }, [K()])]), k(D_, {
      itemNum: w.value,
      current: a.type === "default" ? u.value : u.value + 1,
      onEnter: (C) => R(a.type === "default" ? C + 1 : C)
    }, null), k("div", {
      class: "i-carousel__arrow-last",
      onClick: () => $("last")
    }, [k(Br, {
      color: "#fff",
      name: "ArrowLeft"
    }, null)]), k("div", {
      class: "i-carousel__arrow-next",
      onClick: () => $("next")
    }, [k(Br, {
      color: "#fff",
      name: "ArrowRight"
    }, null)])]);
  }
}), _u = {
  install(a) {
    a.component("i-carousel", H_), a.component("i-carousel-item", ao);
  }
}, k_ = { class: "i-alert--content" }, z_ = {
  key: 0,
  class: "i-alert--title"
}, G_ = { class: "i-alert--description" }, Y_ = {
  key: 0,
  class: "i-alert--operation"
}, X_ = /* @__PURE__ */ fe({
  __name: "alert",
  props: {
    closable: { type: Boolean, default: !1 },
    title: null,
    type: { default: "info" }
  },
  setup(a) {
    const x = oe(!1), u = () => {
      x.value = !0;
    }, w = F(() => ["i-alert", `i-alert--type-${a.type}`]), A = F(() => ({
      info: "TipInfo",
      success: "TipCheckFill",
      warning: "TipWarningFill",
      error: "TipCloseFill"
    })[a.type]);
    return (y, b) => {
      const L = Bt("i-icon");
      return x.value ? Ae("", !0) : (Q(), ie("div", {
        key: 0,
        class: un(ge(w))
      }, [
        k(L, {
          name: ge(A),
          size: 16
        }, null, 8, ["name"]),
        ut("div", k_, [
          a.title ? (Q(), ie("div", z_, Cu(a.title), 1)) : Ae("", !0),
          ut("div", G_, [
            ye(y.$slots, "default"),
            y.$slots.operation ? (Q(), ie("div", Y_, [
              ye(y.$slots, "operation")
            ])) : Ae("", !0)
          ])
        ]),
        a.closable ? (Q(), ie("div", {
          key: 0,
          class: "i-alert--close-btn",
          onClick: u
        }, [
          k(L, {
            name: "Close",
            size: 16
          })
        ])) : Ae("", !0)
      ], 2));
    };
  }
});
const pu = {
  install(a) {
    a.component("i-alert", X_);
  }
}, q_ = ["data-popper-placement"], K_ = ["data-popper-placement"], Z_ = { class: "i-popup__text" }, J_ = /* @__PURE__ */ fe({
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
  setup(a, { emit: x }) {
    let u = document.querySelector("#i-popup-wrapper");
    u || (u = document.createElement("div"), u.className = "i-popup-wrapper", u.id = "i-popup-wrapper", document.body.append(u));
    const w = (T, m, R) => {
      let G = (R == null ? void 0 : R.width) || 0, Z = (R == null ? void 0 : R.height) || 0;
      const te = {
        top: M(m.left + (m.width - G) / 2),
        "top-left": M(m.left),
        "top-right": M(m.left + (m.width - G)),
        bottom: M(m.left + (m.width - G) / 2),
        "bottom-left": M(m.left),
        "bottom-right": M(m.left + (m.width - G)),
        left: M(m.left - G - 16),
        "left-top": M(m.left - G - 16),
        "left-bottom": M(m.left - G - 16),
        right: M(m.left + m.width + 16),
        "right-top": M(m.left + m.width + 16),
        "right-bottom": M(m.left + m.width + 16)
      }, he = {
        top: M(m.top - Z - 16),
        "top-left": M(m.top - Z - 16),
        "top-right": M(m.top - Z - 16),
        bottom: M(m.top + m.height + 16),
        "bottom-left": M(m.top + m.height + 16),
        "bottom-right": M(m.top + m.height + 16),
        left: M(m.top + (m.height - Z) / 2),
        "left-top": M(m.top),
        "left-bottom": M(m.top + (m.height - Z)),
        right: M(m.top + (m.height - Z) / 2),
        "right-top": M(m.top),
        "right-bottom": M(m.top + (m.height - Z))
      };
      return {
        left: te[T],
        top: he[T]
      };
    }, A = oe(null);
    Wr(() => {
      x("getRef", A);
    });
    const y = xu({
      rePlaceNum: 0,
      styles: {},
      currentPlacement: a.placement
    }), b = (T) => {
      if (A.value) {
        const m = T.split("-")[0], R = T.split("-")[1] ? "-" + T.split("-")[1] : "", G = window.innerWidth, Z = window.innerHeight, te = A.value.getBoundingClientRect(), he = te.width, ee = te.height, xe = te.top, ke = te.left;
        let $ = T;
        xe < Z && ke < G && y.rePlaceNum < 3 && (m === "top" && xe < 0 && ($ = "bottom" + R), m === "bottom" && Z - ee - xe < 0 && ($ = "top" + R), m === "left" && ke < 0 && ($ = "right" + R), m === "right" && G - he - ke < 0 && ($ = "left" + R), y.rePlaceNum += 1), y.currentPlacement = $;
      }
    };
    Wr(() => {
      b(y.currentPlacement);
    }), Wr(() => {
      var m;
      const T = (m = A.value) == null ? void 0 : m.getBoundingClientRect();
      y.styles = w(y.currentPlacement, {
        left: a.left,
        top: a.top,
        width: a.width,
        height: a.height
      }, T);
    });
    const L = F(() => ["i-popup", a.contentClass]), K = F(() => [{ ...a.contentStyle }, { ...y.styles }]);
    return (T, m) => (Q(), ie("div", null, [
      (Q(), $r(r_, { to: "#i-popup-wrapper" }, [
        k(Nt, { name: "i-fade" }, {
          default: kn(() => [
            a.visible ? (Q(), ie("div", {
              key: 0,
              ref_key: "popupRef",
              ref: A,
              class: un(ge(L)),
              style: yn(ge(K)),
              "data-popper-placement": y.currentPlacement
            }, [
              ut("div", {
                class: "i-popup__arrow",
                "data-popper-placement": y.currentPlacement
              }, null, 8, K_),
              ut("div", Z_, [
                ye(T.$slots, "default")
              ])
            ], 14, q_)) : Ae("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
});
const Q_ = { class: "i-popup__reference" }, V_ = /* @__PURE__ */ fe({
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
  setup(a, { emit: x }) {
    const u = xu({
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }), w = (C) => {
      const U = C.getBoundingClientRect();
      u.top = ((U == null ? void 0 : U.top) || 0) + window.scrollY, u.left = ((U == null ? void 0 : U.left) || 0) + window.scrollX, u.width = (U == null ? void 0 : U.width) || 0, u.height = (U == null ? void 0 : U.height) || 0;
    }, A = oe(a.defaultVisible), y = F(() => {
      var C;
      return (C = a.visible) != null ? C : A.value;
    }), b = (C, U) => {
      for (; C; ) {
        if (C === U)
          return !0;
        C = C.parentNode;
      }
      return !1;
    };
    $t(() => {
      const C = L.value.children[0];
      w(C);
    });
    const L = oe(null);
    Ot(() => a.updateLocation, () => {
      const C = L.value.children[0];
      w(C);
    });
    const K = (C, U) => {
      const V = L.value.children[0];
      U && w(V), A.value = U, x("trigger", U);
    }, T = () => {
      A.value = !1, x("trigger", !1);
    }, m = oe(null), R = (C) => {
      m.value = C.value;
    }, G = oe(!1), Z = (C) => {
      b(C.target, m.value) || (b(C.target, L.value) || T(), G.value = !1, window.removeEventListener("click", Z));
    };
    Ot(G, (C) => {
      if (C)
        return window.addEventListener("click", Z), () => window.removeEventListener("click", Z);
    });
    const te = (C) => {
      a.trigger === "click" && (K(C, !y.value), y.value && setTimeout(() => G.value = !0));
    }, he = oe(!1), ee = (C) => {
      C.preventDefault(), b(C.target, m.value) || (T(), he.value = !1, window.removeEventListener("click", ee), window.removeEventListener("contextmenu", ee));
    };
    Ot(he, (C) => {
      if (C)
        return window.addEventListener("click", ee), window.addEventListener("contextmenu", ee), () => {
          window.removeEventListener("click", ee), window.removeEventListener("contextmenu", ee);
        };
    });
    const xe = (C) => {
      a.trigger === "context-menu" && (C.preventDefault(), K(C, !y.value), y.value && setTimeout(() => he.value = !0));
    }, ke = (C) => {
      C.preventDefault(), b(C.target, m.value) || (b(C.target, L.value) || T(), window.removeEventListener("click", Z));
    }, $ = (C) => {
      a.trigger === "hover" && (K(C, !y.value), setTimeout(() => {
        window.addEventListener("mouseover", ke);
      }));
    }, J = new ResizeObserver((C) => {
      u.width = C[0].contentRect.width || 0, u.height = C[0].contentRect.height || 0;
    });
    return $t(() => {
      J.observe(L.value);
    }), yu(() => {
      J.disconnect();
    }), (C, U) => (Q(), ie("div", Q_, [
      ut("section", {
        onClick: te,
        onMouseenter: $,
        onContextmenu: xe,
        ref_key: "triggerNode",
        ref: L
      }, [
        ye(C.$slots, "default")
      ], 544),
      k(J_, {
        contentStyle: a.portalStyle,
        contentClass: a.portalClassName,
        visible: ge(y) && !a.disabled,
        placement: a.placement,
        top: u.top,
        left: u.left,
        width: u.width,
        height: u.height,
        onGetRef: R
      }, {
        default: kn(() => [
          io(Cu(a.content), 1)
        ]),
        _: 1
      }, 8, ["contentStyle", "contentClass", "visible", "placement", "top", "left", "width", "height"])
    ]));
  }
});
const mu = {
  install(a) {
    a.component("i-popup", V_);
  }
}, e0 = {
  install(a) {
    var x, u, w, A, y, b, L, K, T, m, R, G, Z, te, he, ee;
    (x = ru.install) == null || x.call(ru, a), (u = iu.install) == null || u.call(iu, a), (w = uu.install) == null || w.call(uu, a), (A = lu.install) == null || A.call(lu, a), (y = au.install) == null || y.call(au, a), (b = ou.install) == null || b.call(ou, a), (L = fu.install) == null || L.call(fu, a), (K = su.install) == null || K.call(su, a), (T = cu.install) == null || T.call(cu, a), (m = hu.install) == null || m.call(hu, a), (R = du.install) == null || R.call(du, a), (G = gu.install) == null || G.call(gu, a), (Z = vu.install) == null || Z.call(vu, a), (te = _u.install) == null || te.call(_u, a), (he = pu.install) == null || he.call(pu, a), (ee = mu.install) == null || ee.call(mu, a);
  }
};
export {
  X_ as Alert,
  pu as AlertPlugin,
  $_ as Avatar,
  N_ as AvatarGroup,
  gu as AvatarPlugin,
  I_ as BackTop,
  cu as BackTopPlugin,
  P_ as Badge,
  vu as BadgePlugin,
  T_ as Breadcrumb,
  L_ as BreadcrumbItem,
  su as BreadcrumbPlugin,
  i_ as Button,
  ru as ButtonPlugin,
  H_ as Carousel,
  ao as CarouselItem,
  _u as CarouselPlugin,
  lo as Checkbox,
  O_ as CheckboxGroup,
  du as CheckboxPlugin,
  u_ as Divider,
  uu as DividerPlugin,
  S_ as Dropdown,
  fu as DropdownPlugin,
  l_ as Grid,
  a_ as GridItem,
  lu as GridPlugin,
  Br as Icon,
  iu as IconPlugin,
  o_ as Layout,
  au as LayoutPlugin,
  V_ as Popup,
  mu as PopupPlugin,
  uo as Radio,
  E_ as RadioGroup,
  hu as RadioPlugin,
  b_ as Scrollbar,
  ou as ScrollbarPlugin,
  e0 as default
};
