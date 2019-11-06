webpackJsonp([ 2 ], {
    "565": function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var a = r(26), o = n(a), u = r(18), s = n(u), i = r(19), l = n(i), d = r(21), f = n(d), p = r(20), c = n(p), v = r(4), _ = n(v);
        r(1357);
        var g = r(1360), m = n(g), b = function(e) {
            function t() {
                return (0, s["default"])(this, t), (0, f["default"])(this, (t.__proto__ || (0, o["default"])(t)).apply(this, arguments));
            }
            return (0, c["default"])(t, e), (0, l["default"])(t, [ {
                "key": "render",
                "value": function() {
                    return _["default"].createElement("div", {
                        "className": "page-box"
                    }, "this is page1~", _["default"].createElement("img", {
                        "src": m["default"]
                    }));
                }
            } ]), t;
        }(v.Component);
        t["default"] = b;
    },
    "568": function(e, t, r) {
        t = e.exports = r(272)(void 0), t.push([ e.id, ".page-box {\r\n    border: 1px solid red;\r\n}", "" ]);
    },
    "1357": function(e, t, r) {
        var n = r(568);
        "string" == typeof n && (n = [ [ e.id, n, "" ] ]);
        var a = {};
        a.transform = void 0;
        r(325)(n, a);
        n.locals && (e.exports = n.locals);
    },
    "1360": function(e, t, r) {
        e.exports = r.p + "assets/url-img/brickpsert.8efa7.jpg";
    }
});