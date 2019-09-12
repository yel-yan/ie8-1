webpackJsonp([ 1 ], {
    "487": function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var a = r(22), o = n(a), u = r(10), s = n(u), i = r(14), l = n(i), d = r(12), f = n(d), p = r(11), c = n(p), v = r(2), _ = n(v);
        r(1181);
        var g = r(1184), m = n(g), b = function(e) {
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
    "490": function(e, t, r) {
        t = e.exports = r(204)(void 0), t.push([ e.id, ".page-box {\r\n    border: 1px solid red;\r\n}", "" ]);
    },
    "1181": function(e, t, r) {
        var n = r(490);
        "string" == typeof n && (n = [ [ e.id, n, "" ] ]);
        var a = {};
        a.transform = void 0;
        r(260)(n, a);
        n.locals && (e.exports = n.locals);
    },
    "1184": function(e, t, r) {
        e.exports = r.p + "assets/url-img/brickpsert.8efa7.jpg";
    }
});