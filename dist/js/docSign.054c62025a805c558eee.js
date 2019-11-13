webpackJsonp([ 6 ], {
    "1287": function(e, a, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(a, "__esModule", {
            "value": !0
        });
        var u = t(16), r = n(u), l = t(17), o = n(l), f = t(18), c = n(f), d = t(20), i = n(d), s = t(19), h = n(s), p = t(4), _ = n(p), v = t(7), g = function(e) {
            function a() {
                var e, t, n, u;
                (0, o["default"])(this, a);
                for (var l = arguments.length, f = Array(l), c = 0; c < l; c++) f[c] = arguments[c];
                return t = n = (0, i["default"])(this, (e = a.__proto__ || (0, r["default"])(a)).call.apply(e, [ this ].concat(f))), 
                n.onChange = function(e) {}, u = t, (0, i["default"])(n, u);
            }
            return (0, h["default"])(a, e), (0, c["default"])(a, [ {
                "key": "render",
                "value": function() {
                    return _["default"].createElement("div", {
                        "className": "page-box"
                    }, "这个公文签批页面~aaaaaaaaaa", _["default"].createElement(v.DatePicker, {
                        "placeholder": "结束日期",
                        "onChange": this.onChange
                    }));
                }
            } ]), a;
        }(p.Component);
        a["default"] = g;
    }
});