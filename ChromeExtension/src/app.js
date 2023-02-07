(function () {
  "use strict";
  var e = {
      69: function (e, t, o) {
        var n = o(9242),
          i = o(3396);
        const l = { id: "mainForm", class: "fixed w-ext h-ext z-50" },
          a = (0, i._)(
            "span",
            {
              id: "cross1",
              class:
                "absolute w-4 border-b-gray-600 rotate-45 border-b-2 top-1/3 right-2 transition-all",
            },
            null,
            -1
          ),
          r = (0, i._)(
            "span",
            {
              id: "cross2",
              class:
                "absolute w-4 border-b-gray-600 -rotate-45 border-b-2 top-1/3 right-2 transition-all",
            },
            null,
            -1
          ),
          s = [a, r],
          u = {
            id: "form",
            class:
              "absolute w-ext h-ext flex justify-center rounded-xl border-2 border-gray-500 items-center z-40",
          },
          c = (0, i._)(
            "div",
            {
              class:
                "absolute top-0 w-full h-4 opacity-50 bg-gray-600 rounded-t-lg z-30",
            },
            null,
            -1
          ),
          d = (0, i._)(
            "div",
            {
              id: "background",
              class:
                "absolute w-ext h-ext bg-black-ext rounded-xl backdrop-blur-2xl opacity-70 z-10",
            },
            null,
            -1
          ),
          g = {
            class:
              "absolute w-5/6 h-1/4 top-11 grid grid-cols-2 grid-rows-3 gap-1 top-5",
          },
          m = (0, i._)(
            "h",
            { class: "text-3xl pHead text-white z-40 select-none" },
            "Time",
            -1
          ),
          p = (0, i._)(
            "h",
            { class: "text-3xl pHead text-white z-40 select-none" },
            "Conclusion",
            -1
          ),
          b = (0, i._)(
            "option",
            { value: "Yours sincerely," },
            "Yours sincerely",
            -1
          ),
          h = (0, i._)("option", { value: "Best wishes," }, "Best wishes", -1),
          y = (0, i._)(
            "option",
            { value: "Thank you for your time," },
            " Thank you for your time ",
            -1
          ),
          f = [b, h, y],
          v = (0, i._)(
            "h",
            { class: "text-3xl text-white z-40 select-none" },
            "Name",
            -1
          ),
          w = { id: "bodyContainer", class: "absolute w-5/6 z-40" },
          x = ["value"],
          _ = (0, i._)(
            "textarea",
            {
              id: "main",
              class:
                "relative w-full h-inputMain bg-white rounded-md indent-2 text-lg leading-4 resize-none z-40 opacity-70 focus:opacity-100",
            },
            null,
            -1
          ),
          z = { id: "buttonContainer", class: "absolute w-5/6 z-40" },
          k = ["value"],
          B = ["value"],
          N = { id: "bottomButton", class: "absolute w-5/6 h-12 z-40" };
        function I(e, t, o, a, r, b) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", l, [
              (0, i._)(
                "button",
                {
                  onClick:
                    t[0] || (t[0] = (...e) => b.disable && b.disable(...e)),
                  class:
                    "absolute w-6 h-6 right-2 top-0 hover:opacity-40 transition-all z-50",
                },
                s
              ),
              (0, i._)("div", u, [
                (0, i._)(
                  "div",
                  {
                    onMousedown:
                      t[1] || (t[1] = (...e) => b.drag && b.drag(...e)),
                    onMousemove:
                      t[2] || (t[2] = (...e) => b.dragging && b.dragging(...e)),
                    onMouseup:
                      t[3] || (t[3] = (...e) => b.drop && b.drop(...e)),
                    class: "absolute -top-12 w-full h-28 z-50",
                  },
                  null,
                  32
                ),
                c,
                d,
                (0, i._)("div", g, [
                  m,
                  (0, i.wy)(
                    (0, i._)(
                      "input",
                      {
                        "onUpdate:modelValue":
                          t[4] || (t[4] = (e) => (r.time = e)),
                        class:
                          "h-8 outline-none z-50 bg-white text-lg indent-2 leading-3 rounded-md opacity-70 focus:opacity-100",
                      },
                      null,
                      512
                    ),
                    [[n.nr, r.time]]
                  ),
                  p,
                  (0, i.wy)(
                    (0, i._)(
                      "select",
                      {
                        "onUpdate:modelValue":
                          t[5] || (t[5] = (e) => (r.goodbye = e)),
                        id: "selectItems",
                        class:
                          "h-8 outline-none  border-none appearance-none bg-white text-md leading-3 rounded-md z-40 opacity-70 focus:opacity-100",
                      },
                      f,
                      512
                    ),
                    [[n.bM, r.goodbye]]
                  ),
                  v,
                  (0, i.wy)(
                    (0, i._)(
                      "input",
                      {
                        "onUpdate:modelValue":
                          t[6] || (t[6] = (e) => (r.urName = e)),
                        class:
                          "h-8 outline-none bg-white indent-2 text-lg leading-3 rounded-md z-40 opacity-70 focus:opacity-100",
                      },
                      null,
                      512
                    ),
                    [[n.nr, r.urName]]
                  ),
                ]),
                (0, i._)("div", w, [
                  (0, i._)(
                    "input",
                    {
                      id: "time",
                      value: r.time,
                      class:
                        "relative w-full mb-2.5 h-inputTime bg-white rounded-md outline-none indent-2 text-lg leading-3 z-40 opacity-70 focus:opacity-100",
                    },
                    null,
                    8,
                    x
                  ),
                  _,
                ]),
                (0, i._)("div", z, [
                  (0, i._)(
                    "input",
                    {
                      id: "gb",
                      value: r.goodbye,
                      class:
                        "absolute w-72 left-0 h-inputConc bg-white rounded-md outline-none indent-2 text-lg leading-3 z-40 opacity-70 focus:opacity-100",
                    },
                    null,
                    8,
                    k
                  ),
                  (0, i._)(
                    "input",
                    {
                      id: "urName",
                      value: r.urName,
                      class:
                        "absolute w-72 right-0 h-inputConc bg-white rounded-md outline-none indent-2 text-lg leading-3 z-40 opacity-70 focus:opacity-100",
                    },
                    null,
                    8,
                    B
                  ),
                ]),
                (0, i._)("div", N, [
                  (0, i._)(
                    "button",
                    {
                      onClick:
                        t[7] || (t[7] = (...e) => b.copy && b.copy(...e)),
                      class:
                        "absolute text-xl w-36 h-14 bg-white opacity-80 rounded-lg hover:opacity-40 transition-all z-40",
                    },
                    " Copy to clipboard "
                  ),
                  (0, i._)(
                    "button",
                    {
                      onClick:
                        t[8] || (t[8] = (...e) => b.save && b.save(...e)),
                      class:
                        "absolute text-xl w-48 left-1/3 h-14 bg-white opacity-80 rounded-lg hover:opacity-40 transition-all z-40",
                    },
                    " Save "
                  ),
                  (0, i._)(
                    "button",
                    {
                      onClick:
                        t[9] || (t[9] = (...e) => b.clean && b.clean(...e)),
                      class:
                        "absolute text-xl w-36 h-14 right-0 bg-white opacity-80 rounded-lg hover:opacity-40 transition-all z-40",
                    },
                    " Clean all "
                  ),
                ]),
              ]),
            ])
          );
        }
        var E = {
            name: "BetterLetterApp",
            data() {
              return {
                urName: "",
                time: "",
                goodbye: "",
                pickedUp: !1,
                mainForm: "",
              };
            },
            components: {},
            created() {
              const e = localStorage.getItem("information");
              let t = JSON.parse(e);
              if (null === t)
                return (
                  (this.urName = ""), (this.time = ""), void (this.goodbye = "")
                );
              (this.urName = t.UrName),
                (this.time = t.Time.slice(0, -1)),
                (this.goodbye = t.Gb);
            },
            mounted() {
              this.mainForm = document.getElementById("mainForm");
            },
            methods: {
              drag() {
                (this.mainForm.style.position = "absolute"),
                  (this.pickedUp = !0);
              },
              dragging() {
                this.pickedUp &&
                  ((this.mainForm.style.left = event.clientX - 360 + "px"),
                  (this.mainForm.style.top = event.clientY - 60 + "px"));
              },
              drop() {
                this.pickedUp = !1;
              },
              disable() {
                let e = document.getElementById("form"),
                  t = document.getElementById("cross1"),
                  o = document.getElementById("cross2");
                e.classList.toggle("hidden"),
                  e.classList.toggle("none"),
                  t.classList.toggle("rotate-0"),
                  o.classList.toggle("rotate-0"),
                  t.classList.toggle("border-8"),
                  o.classList.toggle("border-8"),
                  t.classList.toggle("opacity-100"),
                  o.classList.toggle("opacity-100");
              },
              copy() {
                let e = document.getElementById("time").value,
                  t = document.getElementById("main").value,
                  o = document.getElementById("gb").value,
                  n = document.getElementById("urName").value,
                  i = e + "," + "\n" + t + "\n" + o + "\n" + n;
                navigator.clipboard.writeText(i);
              },
              clean() {
                let e = ["time", "main", "gb", "urName"];
                (this.urName = ""), (this.time = ""), (this.goodbye = "");
                for (let t = 0; t < e.length; t++)
                  document.getElementById(`${e[t]}`).value = "";
                localStorage.clear();
              },
              save() {
                let e = document.getElementById("time").value,
                  t = document.getElementById("main").value,
                  o = document.getElementById("gb").value,
                  n = document.getElementById("urName").value,
                  i = { Time: e, Main: t, Gb: o, UrName: n };
                localStorage.setItem("information", JSON.stringify(i));
              },
            },
          },
          O = o(89);
        const C = (0, O.Z)(E, [["render", I]]);
        var L = C;
        (0, n.ri)(L).mount("#app");
      },
    },
    t = {};
  function o(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var l = (t[n] = { exports: {} });
    return e[n](l, l.exports, o), l.exports;
  }
  (o.m = e),
    (function () {
      var e = [];
      o.O = function (t, n, i, l) {
        if (!n) {
          var a = 1 / 0;
          for (c = 0; c < e.length; c++) {
            (n = e[c][0]), (i = e[c][1]), (l = e[c][2]);
            for (var r = !0, s = 0; s < n.length; s++)
              (!1 & l || a >= l) &&
              Object.keys(o.O).every(function (e) {
                return o.O[e](n[s]);
              })
                ? n.splice(s--, 1)
                : ((r = !1), l < a && (a = l));
            if (r) {
              e.splice(c--, 1);
              var u = i();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        l = l || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > l; c--) e[c] = e[c - 1];
        e[c] = [n, i, l];
      };
    })(),
    (function () {
      o.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return o.d(t, { a: t }), t;
      };
    })(),
    (function () {
      o.d = function (e, t) {
        for (var n in t)
          o.o(t, n) &&
            !o.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      o.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = { 143: 0 };
      o.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, n) {
          var i,
            l,
            a = n[0],
            r = n[1],
            s = n[2],
            u = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (i in r) o.o(r, i) && (o.m[i] = r[i]);
            if (s) var c = s(o);
          }
          for (t && t(n); u < a.length; u++)
            (l = a[u]), o.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
          return o.O(c);
        },
        n = (self["webpackChunkextension"] =
          self["webpackChunkextension"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = o.O(void 0, [998], function () {
    return o(69);
  });
  n = o.O(n);
})();
//# sourceMappingURL=app.55b44812.js.map
