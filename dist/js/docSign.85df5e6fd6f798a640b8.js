webpackJsonp([ 5 ], {
    "521": function(e, a, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(a, "__esModule", {
            "value": !0
        });
        var o = t(30), l = n(o), r = t(31), u = n(r), c = t(32), f = n(c), d = t(34), i = n(d), s = t(33), h = n(s), p = t(7), _ = n(p), g = t(75), v = function(e) {
            function a() {
                var e, t, n, o;
                (0, u["default"])(this, a);
                for (var r = arguments.length, c = Array(r), f = 0; f < r; f++) c[f] = arguments[f];
                return t = n = (0, i["default"])(this, (e = a.__proto__ || (0, l["default"])(a)).call.apply(e, [ this ].concat(c))), 
                n.onChange = function(e) {
                    console.log("From: ", e[0], ", to: ", e[1]);
                }, o = t, (0, i["default"])(n, o);
            }
            return (0, h["default"])(a, e), (0, f["default"])(a, [ {
                "key": "render",
                "value": function() {
                    return _["default"].createElement("div", {
                        "className": "page-box"
                    }, "这个公文签批页面~aaaaaaaaaa", _["default"].createElement(g.DatePicker, {
                        "placeholder": "结束日期",
                        "onChange": this.onChange
                    }));
                }
            } ]), a;
        }(p.Component);
        a["default"] = v;
    }
});