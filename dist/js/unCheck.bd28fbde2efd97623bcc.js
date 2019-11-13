webpackJsonp([ 2 ], {
    "26": function(e, t) {
        "use strict";
        function a(e, t) {
            var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            t = t ? t.toLowerCase() : "y-m-d h:i:s";
            var l = [ "日", "一", "二", "三", "四", "五", "六" ], n = new Date(1e3 * e), r = n.getFullYear(), i = void 0, s = void 0, o = void 0, u = void 0, d = void 0;
            a ? (i = n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1, s = n.getDate() < 10 ? "0" + n.getDate() : n.getDate(), 
            o = n.getHours() < 10 ? "0" + n.getHours() : n.getHours(), u = n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes(), 
            d = n.getSeconds() < 10 ? "0" + n.getSeconds() : n.getSeconds()) : (i = n.getMonth() + 1, 
            s = n.getDate(), o = n.getHours(), u = n.getMinutes(), d = n.getSeconds());
            var c = l[n.getDay()];
            return t.replace("y", r).replace("m", i).replace("d", s).replace("h", o).replace("i", u).replace("s", d).replace("w", c);
        }
        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = new Date().getTime(), l = n(a, !0).thatDay, r = n(e, t), i = (r.thatDay, 
            (e - l) / 1e3);
            return i > 0 ? r.withHour : i > -86400 ? r.withLastDay : i > -604800 ? r.withDay : i > -2592e3 ? r.withMonth : r.withYear;
        }
        function n(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
            e = new Date(e);
            var l = e.getFullYear(), n = e.getYear() - 100, r = e.getMonth() + 1;
            r = r > 9 ? r : "0" + r;
            var i = e.getDate();
            i = i > 9 ? i : "0" + i;
            var s = e.getHours();
            s = s > 9 ? s : "0" + s;
            var o = e.getMinutes();
            o = o > 9 ? o : "0" + o;
            var u = e.getDay();
            u = a[u];
            var d = new Date(l, r - 1, i, 0, 0, 0).getTime();
            return t ? {
                "withYear": i + "/" + r + "/" + n,
                "withMonth": r + "-" + i,
                "withDay": "" + u,
                "withLastDay": "昨天",
                "withHour": s + ":" + o,
                "thatDay": d
            } : {
                "withYear": l + "-" + r + "-" + i + " " + s + ":" + o,
                "withMonth": r + "-" + i + " " + s + ":" + o,
                "withDay": u + " " + s + ":" + o,
                "withLastDay": "昨天 " + s + ":" + o,
                "withHour": s + ":" + o,
                "thatDay": d
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        }), t.timeStampToStr = a, t.formatDate = l;
    },
    "69": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        }), t.Tab_apply = t.Tab = t.RCModal = t.GWModal = t.WCModal = t.JBModal = t.CCModal = t.BXModal = t.WPModal = t.QJModal = t.Profile = t.Schedule = t.New = void 0;
        var n = a(172), r = l(n), i = a(174), s = l(i), o = a(173), u = l(o), d = a(179), c = l(d), p = a(175), f = l(p), m = a(176), h = l(m), v = a(178), b = l(v), y = a(181), g = l(y), C = a(182), E = l(C), w = a(177), S = l(w), k = a(180), x = l(k), _ = a(183), D = l(_), M = a(184), O = l(M);
        t.New = r["default"], t.Schedule = s["default"], t.Profile = u["default"], t.QJModal = c["default"], 
        t.WPModal = E["default"], t.BXModal = f["default"], t.CCModal = h["default"], t.JBModal = b["default"], 
        t.WCModal = g["default"], t.GWModal = S["default"], t.RCModal = x["default"], t.Tab = D["default"], 
        t.Tab_apply = O["default"];
    },
    "149": function(e, t, a) {
        t = e.exports = a(55)(void 0), t.push([ e.id, "", "" ]);
    },
    "150": function(e, t, a) {
        t = e.exports = a(55)(void 0), t.push([ e.id, ".fiche {\n  height: 100%;\n  background: #fff;\n  border-radius: 2px;\n}\n.fiche ._box {\n  width: 100%;\n  background: #868fd2;\n}\n.fiche ._box .myinfo {\n  padding: 47px 0;\n  vertical-align: middle;\n  text-align: center;\n}\n.fiche ._box .myinfo .info {\n  display: inline-block;\n  color: #fff;\n}\n.fiche ._box .myinfo .info .img {\n  width: 45px;\n  height: 45px;\n  float: left;\n  margin-right: 10px;\n}\n.fiche ._box .myinfo .info .img img {\n  width: 100%;\n  height: 100%;\n}\n.fiche ._box .myinfo .info .info_item {\n  display: inline-block;\n}\n.fiche ._box .myinfo .info .info_item .name {\n  text-align: left;\n}\n.fiche .card-cell {\n  padding: 5% 2%;\n  clear: both;\n  font-size: 12px !important;\n  position: relative;\n  margin-left: 4%;\n}\n.fiche .card-cell .a {\n  width: 80px;\n  height: 20px;\n}\n.fiche .card-cell .shu {\n  width: 4px;\n  height: 15px;\n  background: #6ba1ff;\n  float: left;\n  margin-top: 4px;\n}\n.fiche .card-cell .message {\n  width: 65px;\n  height: 17px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #333333;\n  line-height: 25px;\n  float: right;\n}\n.fiche .card-cell .b {\n  width: 161px;\n  height: 18px;\n  margin-top: 23px;\n}\n.fiche .card-cell .phone {\n  width: 30px;\n  height: 18px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #6ba1ff;\n  line-height: 20px;\n  float: left;\n}\n.fiche .card-cell .number {\n  width: 122px;\n  height: 18px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 20px;\n  float: right;\n}\n.fiche .card-cell .c {\n  width: 267px;\n  height: 20px;\n  margin-top: 25px;\n}\n.fiche .card-cell .mailbox {\n  width: 30px;\n  height: 17px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #6ba1ff;\n  line-height: 20px;\n  float: left;\n}\n.fiche .card-cell .mailbox-v {\n  width: 227px;\n  height: 18px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 20px;\n  float: right;\n}\n.fiche .card-cell .d {\n  width: 140px;\n  height: 17px;\n  margin-top: 23px;\n}\n.fiche .card-cell .position {\n  width: 30px;\n  height: 18px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #6ba1ff;\n  line-height: 20px;\n  float: left;\n}\n.fiche .card-cell .position-v {\n  width: 100px;\n  height: 18px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 20px;\n  float: right;\n}\n.fiche .card-cell .button {\n  display: inline-block;\n  margin-top: 24px;\n}\n.fiche .card-cell .button-v {\n  width: 120px;\n  height: 46px;\n  font-size: 16px;\n  color: #ffffff;\n  line-height: 28px;\n  text-align: center;\n  line-height: 46px;\n  border: solid;\n}\n", "" ]);
    },
    "151": function(e, t, a) {
        t = e.exports = a(55)(void 0), t.push([ e.id, ".upload-list-inline .ant-upload-list-item {\n  display: inline-block;\n  width: 200px;\n  margin-right: 8px;\n}\n", "" ]);
    },
    "172": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var l = a(4), n = function(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }(l), r = a(26);
        a(196);
        var i = function(e) {
            var t = e.newlist, a = e.onNewClick;
            return n["default"].createElement("div", null, t.length > 0 ? t.map(function(e, t) {
                return n["default"].createElement("div", {
                    "className": "card-cell",
                    "key": t,
                    "onClick": a.bind(void 0, e)
                }, n["default"].createElement("div", {
                    "className": "cell-title"
                }, e.Title), n["default"].createElement("div", {
                    "className": "cell-extra"
                }, (0, r.timeStampToStr)(e.CreateAt, "y年m月d日")));
            }) : n["default"].createElement("div", {
                "className": "card-cell-no"
            }, n["default"].createElement("div", {
                "className": "cell-title"
            }, "暂无数据")));
        };
        t["default"] = i;
    },
    "173": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var l = a(4), n = function(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }(l), r = a(7), i = a(70);
        a(197);
        var s = function(e) {
            var t = e.userinfo;
            return n["default"].createElement("div", {
                "className": "fiche"
            }, n["default"].createElement("div", {
                "className": "_box"
            }, n["default"].createElement("div", {
                "className": "myinfo"
            }, n["default"].createElement("div", {
                "className": "info"
            }, n["default"].createElement("div", {
                "className": "img"
            }, n["default"].createElement("img", {
                "src": t.avatar
            })), n["default"].createElement("div", {
                "className": "info_item"
            }, n["default"].createElement("h3", null, "广西杰思信息科技有限公司"), n["default"].createElement("p", {
                "className": "name"
            }, t.realname))))), n["default"].createElement("div", {
                "className": "card-cell"
            }, n["default"].createElement("div", {
                "className": "a"
            }, n["default"].createElement("div", {
                "className": "shu"
            }), n["default"].createElement("div", {
                "className": "message"
            }, "个人信息")), n["default"].createElement("div", {
                "className": "b"
            }, n["default"].createElement("div", {
                "className": "phone"
            }, "手机"), n["default"].createElement("div", {
                "className": "number"
            }, t.phone)), n["default"].createElement("div", {
                "className": "c"
            }, n["default"].createElement("div", {
                "className": "mailbox"
            }, "邮箱"), n["default"].createElement("div", {
                "className": "mailbox-v"
            }, t.email)), n["default"].createElement("div", {
                "className": "d"
            }, n["default"].createElement("div", {
                "className": "position"
            }, "职位"), n["default"].createElement("div", {
                "className": "position-v"
            }, t.position)), n["default"].createElement("div", {
                "className": "button"
            }, n["default"].createElement(i.Link, {
                "to": "/profile1"
            }, n["default"].createElement(r.Button, {
                "type": "primary",
                "size": "large"
            }, "进入个人中心")))));
        };
        t["default"] = s;
    },
    "174": function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var l = a(4), n = function(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }(l), r = function(e) {
            var t = e.schedulelist;
            return n["default"].createElement("div", null, t.length > 0 ? t.map(function(e, t) {
                return n["default"].createElement("div", {
                    "className": "card-cell",
                    "key": t
                }, n["default"].createElement("div", {
                    "className": "cell-title"
                }, e.reason), n["default"].createElement("div", {
                    "className": "cell-extra"
                }, e.start_at.split(" ")[0]));
            }) : n["default"].createElement("div", {
                "className": "card-cell-no"
            }, n["default"].createElement("div", {
                "className": "cell-title"
            }, "暂无数据")));
        };
        t["default"] = r;
    },
    "175": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(10), r = l(n), i = a(47), s = l(i), o = a(105), u = l(o), d = a(25), c = l(d), p = a(16), f = l(p), m = a(17), h = l(m), v = a(18), b = l(v), y = a(20), g = l(y), C = a(19), E = l(C), w = a(4), S = l(w), k = a(7), x = a(26), _ = a(9), D = l(_), M = a(27), O = l(M), T = k.Form.Item, P = k.Steps.Step, I = 0, F = function(e) {
            function t(e) {
                (0, h["default"])(this, t);
                var a = (0, g["default"])(this, (t.__proto__ || (0, f["default"])(t)).call(this, e));
                return a.handleChange = function(e) {
                    a.setState({
                        "summary": e.target.value
                    });
                }, a.handleOk = function(e) {
                    var t = a.props.formData, l = a.props.form.getFieldsValue(), n = {
                        "approveid": t.checkApproverid,
                        "expenseid": t.expense.Expenseid,
                        "status": e,
                        "summary": l.summary
                    };
                    D["default"].POST("expenses/approvalto", n).then(function(t) {
                        1 == t.code ? (k.message.success(t.msg), a.props.onOk({
                            "status": e
                        })) : k.message.error(t.msg);
                    })["catch"](function(e) {});
                }, a.handleCancel = function() {
                    a.props.form.resetFields(), a.props.onCancel();
                }, a.handleSubmit = function(e) {
                    e.preventDefault();
                    var t = {}, l = [], n = a.props.form.getFieldsValue();
                    n.keys.map(function(e) {
                        var t = {};
                        n["time" + e] = Math.floor(new Date(n["time" + e]).getTime() / 1e3), (0, c["default"])(t, {
                            "amount": parseFloat(n["amount" + e]),
                            "cost_type": parseFloat(n["cost_type" + e]),
                            "time": n["time" + e],
                            "content": n["content" + e]
                        }), l.push(t);
                    }), t.detailed = (0, u["default"])(l), t.approverid = n.approverid.join(","), t.ccerid = n.ccerid.join(","), 
                    t.total = a.state.cost_total, t.reason = n.reason, D["default"].POST("expenses/addto", t).then(function(e) {
                        1 == e.code ? (k.message.success(e.msg), a.props.onCancel({
                            "visible": !a.props.visible,
                            "type": "bx"
                        })) : k.message.error(e.msg), a.props.form.resetFields();
                    })["catch"](function(e) {});
                }, a.add = function() {
                    I++;
                    var e = a.props.form, t = e.getFieldValue("keys");
                    t = t.concat(I), e.setFieldsValue({
                        "keys": t
                    });
                }, a.remove = function(e) {
                    I--;
                    var t = a.props.form;
                    t.setFieldsValue((0, s["default"])({}, "amount" + e, 0)), a.targetName["amount" + e] = 0;
                    var l = t.getFieldValue("keys"), n = 0;
                    l = l.filter(function(t) {
                        return t !== e;
                    }), l.map(function(e) {
                        n = parseFloat(t.getFieldValue("amount" + e)) + n;
                    }), t.setFieldsValue({
                        "total": n,
                        "keys": l
                    });
                }, a.state = {
                    "visible": e.visible,
                    "current": 1,
                    "total": 100,
                    "formData": {
                        "total": void 0,
                        "reason": void 0,
                        "detailed": [],
                        "picturn": void 0,
                        "approverid": [],
                        "ccerid": []
                    },
                    "summary": "",
                    "item": {
                        "amount": void 0,
                        "cost_type": void 0,
                        "time": void 0,
                        "content": void 0
                    },
                    "costType": [],
                    "cost_total": 0
                }, a.targetName = {}, a;
            }
            return (0, E["default"])(t, e), (0, b["default"])(t, [ {
                "key": "componentDidMount",
                "value": function() {
                    var e = this;
                    D["default"].GET("expenses/types", {
                        "category": "expense_sub"
                    }).then(function(t) {
                        e.setState({
                            "costType": t.data
                        });
                    })["catch"](function(e) {});
                }
            }, {
                "key": "render",
                "value": function() {
                    var e = this, t = this.props.form, a = t.getFieldProps, l = t.getFieldValue, n = this.state.costType, i = [];
                    a("keys", {
                        "initialValue": [ 0 ]
                    });
                    n.map(function(e, t) {
                        i.push(S["default"].createElement(k.Select.Option, {
                            "key": e.Id
                        }, e.Name));
                    });
                    var s = l("keys").map(function(t, l) {
                        return S["default"].createElement(k.Row, {
                            "style": {
                                "marginBottom": "24px"
                            },
                            "label": "好朋友" + t + "：",
                            "key": l
                        }, S["default"].createElement(k.Col, {
                            "span": "2"
                        }), S["default"].createElement(k.Col, {
                            "span": "20"
                        }, S["default"].createElement(k.Card, {
                            "title": "报销明细" + (t + 1),
                            "extra": S["default"].createElement(k.Button, {
                                "onClick": function() {
                                    return e.remove(t);
                                }
                            }, "删除")
                        }, S["default"].createElement(k.Row, null, S["default"].createElement(k.Col, {
                            "span": "12"
                        }, S["default"].createElement(T, {
                            "label": "费用类型：",
                            "labelCol": {
                                "span": 8
                            },
                            "wrapperCol": {
                                "span": 12
                            }
                        }, S["default"].createElement(k.Select, (0, r["default"])({
                            "size": "large",
                            "style": {
                                "width": 100
                            },
                            "name": "select"
                        }, a("cost_type" + t)), i))), S["default"].createElement(k.Col, {
                            "span": "12"
                        }, S["default"].createElement(T, {
                            "label": "报销金额：",
                            "labelCol": {
                                "span": 8
                            },
                            "wrapperCol": {
                                "span": 12
                            }
                        }, S["default"].createElement(k.Input, (0, r["default"])({
                            "placeholder": "填入金额",
                            "name": "amount" + t
                        }, a("amount" + t, {
                            "rules": [ {
                                "required": !0,
                                "whitespace": !0,
                                "message": "请填写金额"
                            } ],
                            "onChange": function(t) {
                                e.targetName[t.target.name], e.targetName[t.target.name] = t.target.value;
                                var a = 0;
                                for (var l in e.targetName) a = parseFloat(e.targetName[l]) + a;
                                e.props.form.setFieldsValue({
                                    "total": a
                                });
                            }
                        })))))), S["default"].createElement(T, {
                            "label": "发生时间：",
                            "labelCol": {
                                "span": 4
                            },
                            "required": !0
                        }, S["default"].createElement(k.DatePicker, (0, r["default"])({
                            "name": "startDate"
                        }, a("time" + t)))), S["default"].createElement(T, {
                            "label": "费用说明：",
                            "labelCol": {
                                "span": 4
                            },
                            "wrapperCol": {
                                "span": 14
                            }
                        }, S["default"].createElement(k.Input, (0, r["default"])({
                            "type": "textarea",
                            "placeholder": "请输入",
                            "rows": "3"
                        }, a("content" + t)))))));
                    }), o = this.props, u = o.operationType, d = o.visible, p = void 0, f = void 0, m = void 0, h = void 0, v = [], b = [];
                    if (u) {
                        if (p = this.props.formData, f = p.approvers && p.approvers.map(function(e, t) {
                            return 1 == e.Status ? (0, c["default"])(e, {
                                "status": "finish",
                                "title": "已完成",
                                "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                            }) : 0 == e.Status ? (0, c["default"])(e, {
                                "status": "process",
                                "title": "进行中",
                                "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                            }) : (0, c["default"])(e, {
                                "status": "error",
                                "title": "已拒绝",
                                "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                            }), S["default"].createElement(P, {
                                "key": t,
                                "title": e.Realname + " " + e.title,
                                "status": e.status,
                                "description": 0 != e.Status ? e.description : null
                            });
                        }), p.ccers && p.ccers.map(function(e, t) {
                            v.push(e.Realname);
                        }), !p.is_applyer) switch (p.checkStatus) {
                          case 0:
                            m = [ S["default"].createElement(k.Button, {
                                "key": "back",
                                "type": "ghost",
                                "size": "large",
                                "onClick": this.handleOk.bind(this, 2)
                            }, "不同意"), S["default"].createElement(k.Button, {
                                "key": "submit",
                                "type": "primary",
                                "size": "large",
                                "loading": this.state.loading,
                                "onClick": this.handleOk.bind(this, 1)
                            }, "同 意") ];
                            break;

                          case 1:
                            m = [ S["default"].createElement(k.Tag, {
                                "color": "blue"
                            }, "已通过") ];
                            break;

                          case 2:
                            m = [ S["default"].createElement(k.Tag, {
                                "color": "red"
                            }, "未通过") ];
                        }
                        if (p.is_approver) {
                            var y = p.approvers.find(function(e) {
                                return e.Userid == O["default"].get("userId");
                            });
                            h = y && y.Summary;
                        } else p.is_applyer ? h = "申请人意见" : p.is_ccer && (h = "抄送人意见");
                    } else {
                        p = this.state.formData;
                        this.props.approverlist.map(function(e, t) {
                            b.push(S["default"].createElement(k.Select.Option, {
                                "key": e.Userid
                            }, e.Realname));
                        }), m = [ S["default"].createElement(k.Button, {
                            "key": "submit",
                            "type": "primary",
                            "size": "large",
                            "loading": this.state.loading,
                            "onClick": this.handleSubmit
                        }, "提 交") ];
                    }
                    return S["default"].createElement("div", null, S["default"].createElement(k.Modal, {
                        "title": "报销",
                        "visible": d,
                        "width": "620",
                        "onOk": this.handleOk,
                        "onCancel": this.handleCancel,
                        "footer": m
                    }, u ? S["default"].createElement(k.Form, {
                        "horizontal": !0,
                        "onSubmit": this.handleSubmit
                    }, S["default"].createElement(T, {
                        "label": "申请人：",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 6
                        }
                    }, S["default"].createElement(k.Input, {
                        "value": p.expense.Realname,
                        "disabled": !0
                    })), S["default"].createElement(T, {
                        "label": "报销事由：",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 18
                        }
                    }, S["default"].createElement(k.Input, {
                        "value": p.expense.Reason
                    })), p.expense_sub.map(function(e, t) {
                        switch (e.CostType) {
                          case "18":
                            "交通费";
                            break;

                          case "19":
                            "燃油过路费";
                            break;

                          case "20":
                            "住宿费";
                            break;

                          case "21":
                            "餐饮费";
                            break;

                          case "22":
                            "人工费";
                            break;

                          case "23":
                            "项目开支";
                            break;

                          case "24":
                            "通讯费";
                            break;

                          case "25":
                            "加班餐费";
                            break;

                          case "26":
                            "运费";
                            break;

                          case "27":
                            "办公用品";
                            break;

                          default:
                            "其他";
                        }
                        return S["default"].createElement(k.Row, {
                            "style": {
                                "marginBottom": "24px"
                            },
                            "key": t
                        }, S["default"].createElement(k.Col, {
                            "span": "2"
                        }), S["default"].createElement(k.Col, {
                            "span": "20"
                        }, S["default"].createElement(k.Card, {
                            "title": "报销明细1",
                            "key": t
                        }, S["default"].createElement(k.Row, null, S["default"].createElement(k.Col, {
                            "span": "12"
                        }, S["default"].createElement(T, {
                            "label": "费用类型：",
                            "labelCol": {
                                "span": 8
                            },
                            "wrapperCol": {
                                "span": 12
                            }
                        }, S["default"].createElement(k.Input, {
                            "value": e.CostTypeName,
                            "disabled": !0
                        }))), S["default"].createElement(k.Col, {
                            "span": "12"
                        }, S["default"].createElement(T, {
                            "label": "报销金额：",
                            "labelCol": {
                                "span": 8
                            },
                            "wrapperCol": {
                                "span": 12
                            }
                        }, S["default"].createElement(k.Input, {
                            "value": e.Amounts
                        })))), S["default"].createElement(T, {
                            "label": "发生时间：",
                            "labelCol": {
                                "span": 4
                            }
                        }, S["default"].createElement(k.DatePicker, {
                            "name": "startDate",
                            "value": (0, x.timeStampToStr)(e.Time, "y-m-d")
                        })), S["default"].createElement(T, {
                            "id": "control-textarea",
                            "label": "费用说明：",
                            "labelCol": {
                                "span": 4
                            },
                            "wrapperCol": {
                                "span": 14
                            }
                        }, S["default"].createElement(k.Input, {
                            "type": "textarea",
                            "value": e.Content,
                            "rows": "3"
                        })))));
                    }), S["default"].createElement(T, {
                        "label": "报销总额：",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 6
                        }
                    }, S["default"].createElement(k.Input, {
                        "value": p.expense.Total
                    })), S["default"].createElement(T, {
                        "label": "审批人：",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Steps, {
                        "style": {
                            "paddingTop": "7px"
                        },
                        "size": "small",
                        "direction": "vertical"
                    }, f)), p.ccers && S["default"].createElement(T, {
                        "label": "抄送人",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Select, {
                        "multiple": !0,
                        "defaultValue": v,
                        "onChange": this.handleChange1,
                        "disabled": !0
                    })), 0 == p.checkStatus ? S["default"].createElement(T, {
                        "label": "审批意见：",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Input, (0, r["default"])({
                        "type": "textarea",
                        "rows": "3",
                        "name": "summary"
                    }, a("summary")))) : S["default"].createElement(T, {
                        "label": "审批意见：",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Input, {
                        "type": "textarea",
                        "rows": "3",
                        "value": h || "无"
                    }))) : S["default"].createElement(k.Form, {
                        "horizontal": !0
                    }, S["default"].createElement(T, {
                        "label": "报销事由：",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 18
                        }
                    }, S["default"].createElement(k.Input, (0, r["default"])({
                        "placeholder": "请输入..."
                    }, a("reason")))), s, S["default"].createElement(T, {
                        "wrapperCol": {
                            "span": 18,
                            "offset": 2
                        }
                    }, S["default"].createElement(k.Button, {
                        "onClick": this.add,
                        "icon": "plus",
                        "size": "small",
                        "style": {
                            "marginRight": 8
                        }
                    }, "新增明细")), S["default"].createElement(T, {
                        "label": "报销总额：",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 18
                        }
                    }, S["default"].createElement(k.Input, (0, r["default"])({
                        "placeholder": "请输入..."
                    }, a("total")))), S["default"].createElement(T, {
                        "label": "审批人",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 18
                        },
                        "required": !0
                    }, S["default"].createElement(k.Select, (0, r["default"])({
                        "multiple": !0,
                        "name": "approverid"
                    }, a("approverid")), b)), S["default"].createElement(T, {
                        "label": "抄送人",
                        "labelCol": {
                            "span": 4
                        },
                        "wrapperCol": {
                            "span": 18
                        },
                        "required": !0
                    }, S["default"].createElement(k.Select, (0, r["default"])({
                        "multiple": !0,
                        "name": "ccerid"
                    }, a("ccerid")), b)))));
                }
            } ]), t;
        }(S["default"].Component);
        t["default"] = k.Form.create({})(F);
    },
    "176": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(10), r = l(n), i = a(25), s = l(i), o = a(4), u = l(o), d = a(7), c = a(9), p = l(c), f = a(27), m = l(f), h = a(26), v = d.Form.Item, b = (d.Select.Option, 
        d.Steps.Step), y = u["default"].createClass({
            "displayName": "CCModal",
            "mixins": [ d.Form.ValueMixin ],
            "getInitialState": function() {
                return {
                    "formData": {
                        "destinations": void 0,
                        "starteds": void 0,
                        "endeds": void 0,
                        "days": void 0,
                        "reason": void 0,
                        "picture": void 0,
                        "approverid": [],
                        "ccerid": []
                    },
                    "summary": ""
                };
            },
            "handleUpload": function(e) {
                e.file.status, "done" === e.file.status ? d.message.success(e.file.name + " 上传成功。") : "error" === e.file.status && d.message.error(e.file.name + " 上传失败。");
            },
            "handleChange": function(e) {
                this.setState({
                    "summary": e.target.value
                });
            },
            "handleOk": function(e) {
                var t = this, a = this.props.formData, l = this.props.form.getFieldsValue(), n = {
                    "approveid": a.checkApproverid,
                    "businesstripid": a.businesstrip.Businesstripid,
                    "status": e,
                    "summary": l.summary
                };
                p["default"].POST("businesstrips/approvalto", n).then(function(a) {
                    1 == a.code ? (d.message.success(a.msg), t.props.onOk({
                        "status": e
                    })) : d.message.error(a.msg);
                })["catch"](function(e) {});
            },
            "handleCancel": function() {
                var e = {
                    "destinations": void 0,
                    "starteds": void 0,
                    "endeds": void 0,
                    "days": void 0,
                    "reason": void 0,
                    "picture": void 0,
                    "approverid": [],
                    "ccerid": []
                };
                this.setState({
                    "formData": e
                }), this.props.onCancel();
            },
            "handleSubmit": function(e) {
                var t = this;
                e.preventDefault();
                var a = this.state.formData;
                a.starteds = Math.floor(new Date(a.starteds).getTime() / 1e3), a.endeds = Math.floor(new Date(a.endeds).getTime() / 1e3), 
                a.approverid = a.approverid.join(","), a.ccerid = a.ccerid.join(","), p["default"].POST("businesstrips/addto", a).then(function(e) {
                    1 == e.code ? (d.message.success(e.msg), t.props.onCancel({
                        "visible": !t.props.visible,
                        "type": "cc"
                    })) : d.message.error(e.msg);
                })["catch"](function(e) {});
            },
            "render": function() {
                var e = this.props.form, t = e.getFieldProps, a = (e.getFieldValue, this.props), l = a.operationType, n = a.visible, i = void 0, o = void 0, c = void 0, p = void 0, f = [], y = [];
                if (l) {
                    if (i = this.props.formData, o = i.approvers && i.approvers.map(function(e, t) {
                        return 1 == e.Status ? (0, s["default"])(e, {
                            "status": "finish",
                            "title": "已完成",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }) : 0 == e.Status ? (0, s["default"])(e, {
                            "status": "process",
                            "title": "进行中",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }) : (0, s["default"])(e, {
                            "status": "error",
                            "title": "已拒绝",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }), u["default"].createElement(b, {
                            "key": t,
                            "title": e.Realname + " " + e.title,
                            "status": e.status,
                            "description": 0 != e.Status ? e.description : null
                        });
                    }), i.ccers && i.ccers.map(function(e, t) {
                        f.push(e.Realname);
                    }), !i.is_applyer) switch (i.checkStatus) {
                      case 0:
                        c = [ u["default"].createElement(d.Button, {
                            "key": "back",
                            "type": "ghost",
                            "size": "large",
                            "onClick": this.handleOk.bind(this, 2)
                        }, "不同意"), u["default"].createElement(d.Button, {
                            "key": "submit",
                            "type": "primary",
                            "size": "large",
                            "loading": this.state.loading,
                            "onClick": this.handleOk.bind(this, 1)
                        }, "同 意") ];
                        break;

                      case 1:
                        c = [ u["default"].createElement(d.Tag, {
                            "color": "blue"
                        }, "已通过") ];
                        break;

                      case 2:
                        c = [ u["default"].createElement(d.Tag, {
                            "color": "red"
                        }, "未通过") ];
                    }
                    if (i.is_approver) {
                        var g = i.approvers.find(function(e) {
                            return e.Userid == m["default"].get("userId");
                        });
                        p = g && g.Summary;
                    } else i.is_applyer ? p = "申请人意见" : i.is_ccer && (p = "抄送人意见");
                } else {
                    i = this.state.formData;
                    var C = this.props;
                    C.types;
                    C.approverlist.map(function(e, t) {
                        y.push(u["default"].createElement(d.Select.Option, {
                            "key": e.Userid
                        }, e.Realname));
                    }), c = [ u["default"].createElement(d.Button, {
                        "key": "submit",
                        "type": "primary",
                        "size": "large",
                        "loading": this.state.loading,
                        "onClick": this.handleSubmit
                    }, "提 交") ];
                }
                return u["default"].createElement(d.Modal, {
                    "title": "出差",
                    "visible": n,
                    "onOk": this.handleOk,
                    "onCancel": this.handleCancel,
                    "footer": c
                }, l ? u["default"].createElement(d.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, u["default"].createElement(v, {
                    "label": "申请人：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 6
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.businesstrip.Realname,
                    "disabled": !0
                })), u["default"].createElement(v, {
                    "label": "目的地：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.businesstrip.Destinations
                })), u["default"].createElement(v, {
                    "label": "起止时间：",
                    "labelCol": {
                        "span": 6
                    },
                    "required": !0
                }, u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "startDate",
                    "value": (0, h.timeStampToStr)(i.businesstrip.Starteds, "y-m-d")
                })), u["default"].createElement(d.Col, {
                    "span": "1"
                }, u["default"].createElement("p", {
                    "className": "ant-form-split"
                }, "-")), u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "endDate",
                    "value": (0, h.timeStampToStr)(i.businesstrip.Endeds, "y-m-d")
                }))), u["default"].createElement(v, {
                    "label": "出差天数：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 10
                    },
                    "required": !0
                }, u["default"].createElement(d.InputNumber, {
                    "size": "large",
                    "min": 1,
                    "max": 10,
                    "style": {
                        "width": 100
                    },
                    "value": i.businesstrip.Days,
                    "name": "inputNumber"
                }), u["default"].createElement("span", {
                    "className": "ant-form-text"
                }, " 天")), u["default"].createElement(v, {
                    "id": "control-textarea",
                    "label": "出差事由",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "value": i.businesstrip.Reason,
                    "rows": "3"
                })), u["default"].createElement(v, {
                    "label": "审批人：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Steps, {
                    "style": {
                        "paddingTop": "7px"
                    },
                    "size": "small",
                    "direction": "vertical"
                }, o)), i.ccers && u["default"].createElement(v, {
                    "label": "抄送人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "defaultValue": f,
                    "onChange": this.handleChange1,
                    "disabled": !0
                })), 0 == i.checkStatus ? u["default"].createElement(v, {
                    "label": "审批意见：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, (0, r["default"])({
                    "type": "textarea",
                    "rows": "3",
                    "name": "summary"
                }, t("summary")))) : u["default"].createElement(v, {
                    "label": "审批意见：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "rows": "3",
                    "value": p || "无"
                }))) : u["default"].createElement(d.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, u["default"].createElement(v, {
                    "id": "control-input",
                    "label": "目的地：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Input, {
                    "id": "control-input",
                    "placeholder": "Please enter...",
                    "name": "destinations",
                    "value": i.destinations,
                    "onChange": this.setValue.bind(this, "destinations")
                })), u["default"].createElement(v, {
                    "label": "起止时间：",
                    "labelCol": {
                        "span": 6
                    },
                    "required": !0
                }, u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "starteds",
                    "onChange": this.setValue.bind(this, "starteds")
                })), u["default"].createElement(d.Col, {
                    "span": "1"
                }, u["default"].createElement("p", {
                    "className": "ant-form-split"
                }, "-")), u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "endeds",
                    "onChange": this.setValue.bind(this, "endeds")
                }))), u["default"].createElement(v, {
                    "label": "出差天数：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 10
                    }
                }, u["default"].createElement(d.InputNumber, {
                    "size": "large",
                    "min": 1,
                    "max": 10,
                    "style": {
                        "width": 100
                    },
                    "name": "days",
                    "onChange": this.setValue.bind(this, "days"),
                    "value": i.days
                }), u["default"].createElement("span", {
                    "className": "ant-form-text"
                }, " 天")), u["default"].createElement(v, {
                    "id": "control-textarea",
                    "label": "出差事由",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "placeholder": "请输入",
                    "id": "control-textarea",
                    "rows": "3",
                    "name": "reason",
                    "value": i.reason,
                    "onChange": this.setValue.bind(this, "reason")
                })), u["default"].createElement(v, {
                    "label": "审批人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "name": "approverid",
                    "value": i.approverid,
                    "onChange": this.setValue.bind(this, "approverid")
                }, y)), u["default"].createElement(v, {
                    "label": "抄送人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "name": "ccerid",
                    "value": i.ccerid,
                    "onChange": this.setValue.bind(this, "ccerid")
                }, y))));
            }
        });
        t["default"] = d.Form.create({})(y);
    },
    "177": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(10), r = l(n), i = a(25), s = l(i), o = a(47), u = l(o), d = a(105), c = l(d), p = a(16), f = l(p), m = a(17), h = l(m), v = a(18), b = l(v), y = a(20), g = l(y), C = a(19), E = l(C), w = a(4), S = l(w), k = a(7), x = a(186), _ = l(x), D = a(9), M = l(D), O = a(93), T = l(O), P = a(27), I = l(P);
        a(198);
        var F = k.Form.Item, j = k.Steps.Step, N = function(e) {
            function t(e) {
                var a;
                (0, h["default"])(this, t);
                var l = (0, g["default"])(this, (t.__proto__ || (0, f["default"])(t)).call(this, e));
                return l.handleUpload = function(e) {
                    var t = [], a = e.fileList;
                    if (a = a.slice(-1), l.setState({
                        "fileList": a
                    }), e.file.status, "done" === e.file.status) {
                        if (0 == e.file.response.code && 1062 == e.file.response.data.Number) {
                            var n = e.file.response.data.Message, r = n.split(" ")[2].substr(1), i = {
                                "fileHash": r.substring(-1, r.length - 1)
                            };
                            return void T["default"].post("/file/get_file_info", i, {
                                "baseURL": "/img",
                                "headers": {
                                    "Content-Type": "multipart/form-data",
                                    "Accept": "text/html"
                                }
                            }).then(function(a) {
                                var n = {};
                                n.FileName = a.data.FileName, n.FilePath = a.data.FileAddr, n.FileType = e.file.type, 
                                n.FileSha1 = a.data.FileSha1, n.UploadAt = String(parseInt(e.file.lastModified / 1e3)), 
                                n.FileSize = a.data.FileSize, t.push(n), l.setState({
                                    "filelist": t
                                }), k.message.success(e.file.name + " 上传成功。");
                            })["catch"](function(e) {});
                        }
                        k.message.success(e.file.name + " 上传成功。");
                        var s = {}, o = e.file.response.data;
                        s.FileName = o.FileName, s.FilePath = o.FileAddr, s.FileType = e.file.type, s.FileSha1 = o.FileSha1, 
                        s.UploadAt = String(parseInt(e.file.lastModified / 1e3)), s.FileSize = o.FileSize, 
                        t.push(s), l.setState({
                            "filelist": t
                        });
                    } else "error" === e.file.status && k.message.error(e.file.name + " 上传失败。");
                }, l.handleChange = function(e) {
                    l.setState({
                        "summary": e.target.value
                    });
                }, l.handleOk = function(e) {
                    var t = l.props.formData, a = l.props.form.getFieldsValue(), n = {
                        "approveid": t.checkApproveid,
                        "signingid": t.signing.Id,
                        "status": e,
                        "summary": a.summary,
                        "signature": l.state.trimmedDataURL
                    };
                    M["default"].POST("signing/approvalto", n).then(function(t) {
                        l.props.form.resetFields(), l.sigPad.clear(), l.setState({
                            "trimmedDataURL": ""
                        }), 1 == t.code ? (k.message.success(t.msg), l.props.onOk({
                            "status": e
                        })) : k.message.error(t.msg);
                    })["catch"](function(e) {});
                }, l.handleCancel = function() {
                    l.props.onCancel({
                        "visible": !l.props.visible
                    }), l.props.form.resetFields(), l.sigPad.clear(), l.setState({
                        "fileList": [],
                        "trimmedDataURL": ""
                    });
                }, l.handlepriviewImageCancel = function() {
                    l.setState({
                        "priviewVisible": !1
                    });
                }, l.showModal = function() {
                    l.setState({
                        "visible": !0
                    });
                }, l.handleSignatureOk = function() {
                    l.setState({
                        "trimmedDataURL": l.sigPad.getTrimmedCanvas().toDataURL("image/png"),
                        "visible": !1
                    });
                }, l.handleSignatureCancel = function() {
                    l.sigPad.clear(), l.setState({
                        "visible": !1
                    });
                }, l.handleSubmit = function(e) {
                    e.preventDefault();
                    var t = l.props.form.getFieldsValue(), a = l.state.filelist, n = {};
                    n.title = t.title, n.content = t.content, n.approverid = t.approverid.join(","), 
                    n.ccerid = t.ccerid.join(","), n.accessory = (0, c["default"])(a), M["default"].POST("signing/addto", n).then(function(e) {
                        1 == e.code ? (k.message.success(e.msg), l.props.form.resetFields(), l.setState({
                            "fileList": []
                        }), l.props.onCancel({
                            "visible": !l.props.visible,
                            "type": "qj"
                        })) : k.message.error(e.msg);
                    })["catch"](function(e) {});
                }, l.state = (a = {
                    "visible": e.visible,
                    "current": 1,
                    "total": 100,
                    "formData": {
                        "total": void 0,
                        "reason": void 0,
                        "detailed": [],
                        "picturn": void 0,
                        "approverid": [],
                        "ccerid": []
                    },
                    "upload": {
                        "FileName": "",
                        "FileAddr": "",
                        "FileType": "",
                        "FileSha1": "",
                        "FileSize": "",
                        "UploadAt": ""
                    },
                    "fileList": [],
                    "filelist": [],
                    "summary": "",
                    "approverlist": []
                }, (0, u["default"])(a, "visible", !1), (0, u["default"])(a, "trimmedDataURL", null), 
                (0, u["default"])(a, "priviewVisible", !1), (0, u["default"])(a, "priviewImage", ""), 
                a), l;
            }
            return (0, E["default"])(t, e), (0, b["default"])(t, [ {
                "key": "componentDidMount",
                "value": function() {
                    var e = this;
                    M["default"].GET("approver/list").then(function(t) {
                        e.setState({
                            "approverlist": t.data
                        });
                    })["catch"](function(e) {});
                }
            }, {
                "key": "normFile",
                "value": function(e) {
                    return Array.isArray(e) ? e : e && e.fileList;
                }
            }, {
                "key": "render",
                "value": function() {
                    var e = this, t = this.state.trimmedDataURL, a = this.props.form.getFieldProps, l = this.props, n = l.operationType, i = l.visible, o = void 0, u = void 0, d = void 0, c = void 0, p = [], f = [];
                    if (n) {
                        if (o = this.props.formData, d = o.approvers && o.approvers.map(function(e, t) {
                            return 1 == e.Status ? (0, s["default"])(e, {
                                "status": "finish",
                                "title": "已完成",
                                "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                            }) : 0 == e.Status ? (0, s["default"])(e, {
                                "status": "process",
                                "title": "进行中",
                                "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                            }) : (0, s["default"])(e, {
                                "status": "error",
                                "title": "已拒绝",
                                "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                            }), S["default"].createElement(j, {
                                "key": t,
                                "title": e.Realname + " " + e.title,
                                "status": e.status,
                                "description": 0 != e.Status ? e.description : null
                            });
                        }), o.ccers && o.ccers.map(function(e, t) {
                            var a = [];
                            a.push(e.Realname), p = a;
                        }), !o.is_applyer) switch (o.checkStatus) {
                          case 0:
                            u = [ S["default"].createElement(k.Button, {
                                "key": "back",
                                "type": "ghost",
                                "size": "large",
                                "onClick": this.handleOk.bind(this, 2)
                            }, "不同意"), S["default"].createElement(k.Button, {
                                "key": "submit",
                                "type": "primary",
                                "size": "large",
                                "loading": this.state.loading,
                                "onClick": this.handleOk.bind(this, 1)
                            }, "同 意") ];
                            break;

                          case 1:
                            u = [ S["default"].createElement(k.Tag, {
                                "color": "blue"
                            }, "已通过") ];
                            break;

                          case 2:
                            u = [ S["default"].createElement(k.Tag, {
                                "color": "red"
                            }, "未通过") ];
                        }
                        if (o.is_approver) {
                            var m = o.approvers.find(function(e) {
                                return e.Userid == I["default"].get("userId");
                            });
                            c = m && m.Summary;
                        } else o.is_applyer ? c = "申请人意见" : o.is_ccer && (c = "抄送人意见");
                    } else {
                        o = this.state.formData;
                        var h = this.state.approverlist;
                        h.map(function(e, t) {
                            f.push(S["default"].createElement(k.Select.Option, {
                                "key": e.Userid
                            }, e.Realname));
                        }), u = [ S["default"].createElement(k.Button, {
                            "key": "submit",
                            "type": "primary",
                            "size": "large",
                            "loading": this.state.loading,
                            "onClick": this.handleSubmit
                        }, "提交") ];
                    }
                    var v = void 0;
                    0 != o.checkStatus && o.approvers && o.approvers.forEach(function(e) {
                        e.Userid == I["default"].get("userId") && (v = e);
                    });
                    var b = {
                        "name": "file",
                        "action": "/img/file/upload_file",
                        "listType": "picture",
                        "headers": {
                            "authorization": "authorization-text"
                        },
                        "onPreview": function(t) {
                            1 == t.response.code ? window.open(t.response.data.FileAddr) : e.setState({
                                "priviewImage": t.thumbUrl,
                                "priviewVisible": !0
                            });
                        }
                    };
                    return S["default"].createElement(k.Modal, {
                        "title": "公文签批",
                        "visible": i,
                        "onOk": this.handleOk,
                        "onCancel": this.handleCancel,
                        "footer": u
                    }, n ? S["default"].createElement(k.Form, {
                        "horizontal": !0,
                        "onSubmit": this.handleSubmit
                    }, S["default"].createElement(F, {
                        "label": "申请人：",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 6
                        }
                    }, S["default"].createElement(k.Input, {
                        "value": o.signing.Realname,
                        "disabled": !0
                    })), S["default"].createElement(F, {
                        "label": "公文标题：",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Input, {
                        "value": o.signing.Title,
                        "disabled": !0
                    })), S["default"].createElement(F, {
                        "label": "公文内容：",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Input, {
                        "type": "textarea",
                        "rows": "3",
                        "value": o.signing.Content,
                        "disabled": !0
                    })), S["default"].createElement(F, {
                        "label": "审批人：",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Steps, {
                        "style": {
                            "paddingTop": "7px"
                        },
                        "size": "small",
                        "direction": "vertical"
                    }, d)), o.ccers && S["default"].createElement(F, {
                        "label": "抄送人",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Select, {
                        "multiple": !0,
                        "value": p,
                        "disabled": !0
                    })), 0 == o.checkStatus && o.is_approver ? S["default"].createElement(F, {
                        "label": "审批意见：",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Input, (0, r["default"])({
                        "type": "textarea",
                        "rows": "3",
                        "name": "summary"
                    }, a("summary")))) : S["default"].createElement(F, {
                        "label": "审批意见：",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Input, {
                        "type": "textarea",
                        "rows": "3",
                        "value": c || "无"
                    })), 0 == o.checkStatus && o.is_approver ? S["default"].createElement(F, {
                        "label": "签字：",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, t ? S["default"].createElement("img", {
                        "style": {
                            "width": "100%",
                            "height": "100%",
                            "backgroundColor": "#ffffff",
                            "border": "1px solid #ccc"
                        },
                        "src": t
                    }) : S["default"].createElement("div", {
                        "style": {
                            "width": "300px",
                            "height": "100px",
                            "backgroundColor": "#ffffff",
                            "border": "1px solid #ccc"
                        },
                        "onClick": this.showModal
                    })) : S["default"].createElement(F, {
                        "label": "签字：",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, v ? S["default"].createElement("img", {
                        "style": {
                            "width": "100%",
                            "height": "100%",
                            "backgroundColor": "#ffffff",
                            "border": "1px solid #ccc"
                        },
                        "src": "" + (v && v.Signature)
                    }) : null), S["default"].createElement(k.Modal, {
                        "title": "签名",
                        "visible": this.state.visible,
                        "onOk": this.handleSignatureOk,
                        "onCancel": this.handleSignatureCancel,
                        "okText": "确定",
                        "cancelText": "清除"
                    }, S["default"].createElement(_["default"], {
                        "canvasProps": {
                            "width": 500,
                            "height": 200,
                            "className": "sigCanvas"
                        },
                        "ref": function(t) {
                            e.sigPad = t;
                        }
                    }))) : S["default"].createElement(k.Form, {
                        "horizontal": !0,
                        "onSubmit": this.handleSubmit
                    }, S["default"].createElement(F, {
                        "label": "公文标题：",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        },
                        "required": !0
                    }, S["default"].createElement(k.Input, (0, r["default"])({
                        "placeholder": "请输入...",
                        "name": "title"
                    }, a("title")))), S["default"].createElement(F, {
                        "label": "公文内容：",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        },
                        "required": !0
                    }, S["default"].createElement(k.Input, (0, r["default"])({
                        "type": "textarea",
                        "placeholder": "请输入",
                        "rows": "3",
                        "name": "content"
                    }, a("content")))), S["default"].createElement(F, {
                        "label": "附件",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 16
                        },
                        "help": "提示信息要长长长长长长长长长长长长长长"
                    }, S["default"].createElement(k.Upload, (0, r["default"])({}, b, {
                        "className": "upload-list-inline",
                        "onChange": this.handleUpload,
                        "fileList": this.state.fileList
                    }), S["default"].createElement(k.Button, {
                        "type": "ghost"
                    }, S["default"].createElement(k.Icon, {
                        "type": "upload"
                    }), " 点击上传"))), S["default"].createElement(k.Modal, {
                        "title": "图片",
                        "visible": this.state.priviewVisible,
                        "footer": null,
                        "onCancel": this.handlepriviewImageCancel
                    }, S["default"].createElement("img", {
                        "style": {
                            "width": "100%"
                        },
                        "alt": "example",
                        "src": this.state.priviewImage
                    })), S["default"].createElement(F, {
                        "label": "审批人",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        },
                        "required": !0
                    }, S["default"].createElement(k.Select, (0, r["default"])({
                        "multiple": !0,
                        "name": "approverid"
                    }, a("approverid")), f)), S["default"].createElement(F, {
                        "label": "抄送人",
                        "labelCol": {
                            "span": 6
                        },
                        "wrapperCol": {
                            "span": 14
                        }
                    }, S["default"].createElement(k.Select, (0, r["default"])({
                        "multiple": !0,
                        "name": "ccerid"
                    }, a("ccerid")), f))));
                }
            } ]), t;
        }(S["default"].Component);
        t["default"] = k.Form.create({})(N);
    },
    "178": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(10), r = l(n), i = a(25), s = l(i), o = a(4), u = l(o), d = a(7), c = a(26), p = a(9), f = l(p), m = a(27), h = l(m), v = d.Form.Item, b = d.Select.Option, y = d.Steps.Step, g = u["default"].createClass({
            "displayName": "JBModal",
            "mixins": [ d.Form.ValueMixin ],
            "getInitialState": function() {
                return {
                    "formData": {
                        "started": void 0,
                        "ended": void 0,
                        "longtime": void 0,
                        "holiday": void 0,
                        "way": void 0,
                        "reason": void 0,
                        "approverid": [],
                        "ccerid": []
                    },
                    "summary": ""
                };
            },
            "handleUpload": function(e) {
                e.file.status, "done" === e.file.status ? d.message.success(e.file.name + " 上传成功。") : "error" === e.file.status && d.message.error(e.file.name + " 上传失败。");
            },
            "handleOk": function(e) {
                var t = this, a = this.props.formData, l = this.props.form.getFieldsValue(), n = {
                    "approveid": a.checkApproverid,
                    "overtimeid": a.overtime.Overtimeid,
                    "status": e,
                    "summary": l.summary
                };
                f["default"].POST("overtimes/approvalto", n).then(function(a) {
                    1 == a.code ? (d.message.success(a.msg), t.props.onOk({
                        "status": e
                    })) : d.message.error(a.msg);
                })["catch"](function(e) {});
            },
            "handleCancel": function() {
                var e = {
                    "started": void 0,
                    "ended": void 0,
                    "longtime": void 0,
                    "holiday": void 0,
                    "way": void 0,
                    "reason": void 0,
                    "approverid": [],
                    "ccerid": []
                };
                this.setState({
                    "formData": e
                }), this.props.onCancel();
            },
            "handleChange": function(e) {
                this.setState({
                    "summary": e.target.value
                });
            },
            "handleSubmit": function(e) {
                var t = this;
                e.preventDefault();
                var a = this.state.formData;
                a.started = Math.floor(new Date(a.started).getTime() / 1e3), a.ended = Math.floor(new Date(a.ended).getTime() / 1e3), 
                a.approverid = a.approverid.join(","), a.ccerid = a.ccerid.join(","), f["default"].POST("overtimes/addto", a).then(function(e) {
                    1 == e.code ? (d.message.success(e.msg), t.props.onCancel({
                        "visible": !t.props.visible,
                        "type": "jb"
                    })) : d.message.error(e.msg);
                })["catch"](function(e) {});
            },
            "render": function() {
                var e = this.props.form, t = e.getFieldProps, a = (e.getFieldValue, this.props), l = a.operationType, n = a.visible, i = void 0, o = void 0, p = void 0, f = void 0, m = [], g = [];
                if (l) {
                    if (i = this.props.formData, o = i.approvers && i.approvers.map(function(e, t) {
                        return 1 == e.Status ? (0, s["default"])(e, {
                            "status": "finish",
                            "title": "已完成",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }) : 0 == e.Status ? (0, s["default"])(e, {
                            "status": "process",
                            "title": "进行中",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }) : (0, s["default"])(e, {
                            "status": "error",
                            "title": "已拒绝",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }), u["default"].createElement(y, {
                            "key": t,
                            "title": e.Realname + " " + e.title,
                            "status": e.status,
                            "description": 0 != e.Status ? e.description : null
                        });
                    }), i.ccers && i.ccers.map(function(e, t) {
                        m.push(e.Realname);
                    }), !i.is_applyer) switch (i.checkStatus) {
                      case 0:
                        p = [ u["default"].createElement(d.Button, {
                            "key": "back",
                            "type": "ghost",
                            "size": "large",
                            "onClick": this.handleOk.bind(this, 2)
                        }, "不同意"), u["default"].createElement(d.Button, {
                            "key": "submit",
                            "type": "primary",
                            "size": "large",
                            "loading": this.state.loading,
                            "onClick": this.handleOk.bind(this, 1)
                        }, "同 意") ];
                        break;

                      case 1:
                        p = [ u["default"].createElement(d.Tag, {
                            "color": "blue"
                        }, "已通过") ];
                        break;

                      case 2:
                        p = [ u["default"].createElement(d.Tag, {
                            "color": "red"
                        }, "未通过") ];
                    }
                    if (i.is_approver) {
                        var C = i.approvers.find(function(e) {
                            return e.Userid == h["default"].get("userId");
                        });
                        f = C && C.Summary;
                    } else i.is_applyer ? f = "申请人意见" : i.is_ccer && (f = "抄送人意见");
                } else {
                    i = this.state.formData;
                    var E = this.props;
                    E.types;
                    E.approverlist.map(function(e, t) {
                        g.push(u["default"].createElement(d.Select.Option, {
                            "key": e.Userid
                        }, e.Realname));
                    }), p = [ u["default"].createElement(d.Button, {
                        "key": "submit",
                        "type": "primary",
                        "size": "large",
                        "loading": this.state.loading,
                        "onClick": this.handleSubmit
                    }, "提 交") ];
                }
                return u["default"].createElement(d.Modal, {
                    "title": "加班",
                    "visible": n,
                    "onOk": this.handleOk,
                    "onCancel": this.handleCancel,
                    "footer": p
                }, l ? u["default"].createElement(d.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, u["default"].createElement(v, {
                    "label": "申请人：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 6
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.overtime.Realname,
                    "disabled": !0
                })), u["default"].createElement(d.Row, null, u["default"].createElement(d.Col, {
                    "span": "12"
                }, u["default"].createElement(v, {
                    "label": "核算方式：",
                    "labelCol": {
                        "span": 12
                    },
                    "wrapperCol": {
                        "span": 9
                    }
                }, u["default"].createElement(d.Input, {
                    "value": 1 == i.overtime.Way ? "按天" : "按小时",
                    "disabled": !0
                }))), u["default"].createElement(d.Col, {
                    "span": "12"
                }, u["default"].createElement(v, {
                    "label": "是否法定：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 9
                    }
                }, u["default"].createElement(d.Input, {
                    "value": 1 == i.overtime.Holiday ? "是" : "否",
                    "disabled": !0
                })))), u["default"].createElement(v, {
                    "label": "起止时间：",
                    "labelCol": {
                        "span": 6
                    }
                }, u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "startDate",
                    "value": (0, c.timeStampToStr)(i.overtime.Created, "y-m-d"),
                    "disabled": !0
                })), u["default"].createElement(d.Col, {
                    "span": "1"
                }, u["default"].createElement("p", {
                    "className": "ant-form-split"
                }, "-")), u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "endDate",
                    "value": (0, c.timeStampToStr)(i.overtime.Ended, "y-m-d"),
                    "disabled": !0
                }))), u["default"].createElement(v, {
                    "id": "control-input",
                    "label": "加班时长：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "id": "control-input",
                    "value": i.overtime.Longtime,
                    "disabled": !0
                })), u["default"].createElement(v, {
                    "id": "control-textarea",
                    "label": "请假事由：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "value": i.overtime.Reason,
                    "id": "control-textarea",
                    "rows": "3",
                    "disabled": !0
                })), u["default"].createElement(v, {
                    "label": "审批人：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Steps, {
                    "style": {
                        "paddingTop": "7px"
                    },
                    "size": "small",
                    "direction": "vertical"
                }, o)), i.ccers && u["default"].createElement(v, {
                    "label": "抄送人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "defaultValue": m,
                    "onChange": this.handleChange1,
                    "disabled": !0
                })), 0 == i.checkStatus ? u["default"].createElement(v, {
                    "label": "审批意见：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, (0, r["default"])({
                    "type": "textarea",
                    "rows": "3",
                    "name": "summary"
                }, t("summary")))) : u["default"].createElement(v, {
                    "label": "审批意见：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "rows": "3",
                    "value": f || "无"
                }))) : u["default"].createElement(d.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, u["default"].createElement(d.Row, null, u["default"].createElement(d.Col, {
                    "span": "12"
                }, u["default"].createElement(v, {
                    "label": "核算方式：",
                    "labelCol": {
                        "span": 12
                    },
                    "wrapperCol": {
                        "span": 9
                    },
                    "required": !0
                }, u["default"].createElement(d.Select, {
                    "size": "large",
                    "style": {
                        "width": 100
                    },
                    "name": "way",
                    "onChange": this.setValue.bind(this, "way"),
                    "value": i.way
                }, u["default"].createElement(b, {
                    "value": "1"
                }, "按天"), u["default"].createElement(b, {
                    "value": "2"
                }, "按小时")))), u["default"].createElement(d.Col, {
                    "span": "12"
                }, u["default"].createElement(v, {
                    "label": "是否法定：",
                    "labelCol": {
                        "span": 7
                    },
                    "wrapperCol": {
                        "span": 9
                    },
                    "required": !0
                }, u["default"].createElement(d.Select, {
                    "size": "large",
                    "style": {
                        "width": 90
                    },
                    "name": "holiday",
                    "onChange": this.setValue.bind(this, "holiday"),
                    "value": i.holiday
                }, u["default"].createElement(b, {
                    "value": "1"
                }, "是"), u["default"].createElement(b, {
                    "value": "2"
                }, "否"))))), u["default"].createElement(v, {
                    "label": "起止时间：",
                    "labelCol": {
                        "span": 6
                    },
                    "required": !0
                }, u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "started",
                    "onChange": this.setValue.bind(this, "started")
                })), u["default"].createElement(d.Col, {
                    "span": "1"
                }, u["default"].createElement("p", {
                    "className": "ant-form-split"
                }, "-")), u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "ended",
                    "onChange": this.setValue.bind(this, "ended")
                }))), u["default"].createElement(v, {
                    "id": "control-input",
                    "label": "加班时长：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "id": "control-input",
                    "placeholder": "请输入...",
                    "name": "longtime",
                    "value": i.longtime,
                    "onChange": this.setValue.bind(this, "longtime")
                })), u["default"].createElement(v, {
                    "id": "control-textarea",
                    "label": "请假事由：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "placeholder": "请输入",
                    "id": "control-textarea",
                    "rows": "3",
                    "name": "reason",
                    "value": i.reason,
                    "onChange": this.setValue.bind(this, "reason")
                })), u["default"].createElement(v, {
                    "label": "审批人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "name": "approverid",
                    "value": i.approverid,
                    "onChange": this.setValue.bind(this, "approverid")
                }, g)), u["default"].createElement(v, {
                    "label": "抄送人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "name": "ccerid",
                    "value": i.ccerid,
                    "onChange": this.setValue.bind(this, "ccerid")
                }, g))));
            }
        });
        t["default"] = d.Form.create({})(g);
    },
    "179": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(10), r = l(n), i = a(25), s = l(i), o = a(4), u = l(o), d = a(7), c = a(9), p = l(c), f = a(185), m = (l(f), 
        a(27)), h = l(m), v = a(26), b = d.Form.Item, y = d.Steps.Step, g = u["default"].createClass({
            "displayName": "QJModal",
            "mixins": [ d.Form.ValueMixin ],
            "getInitialState": function() {
                return {
                    "formData": {
                        "type": void 0,
                        "started": void 0,
                        "ended": void 0,
                        "days": void 0,
                        "reason": void 0,
                        "picture": void 0,
                        "approverid": [],
                        "ccerid": []
                    },
                    "summary": "",
                    "types": []
                };
            },
            "componentDidMount": function() {
                this.props.operationType;
            },
            "componentDidUpdate": function(e) {},
            "handleUpload": function(e) {
                e.file.status, "done" === e.file.status ? d.message.success(e.file.name + " 上传成功。") : "error" === e.file.status && d.message.error(e.file.name + " 上传失败。");
            },
            "handleChange": function(e) {
                this.setState({
                    "summary": e.target.value
                });
            },
            "handleOk": function(e) {
                var t = this, a = this.props.formData, l = this.props.form.getFieldsValue(), n = {
                    "approveid": a.checkApproverid,
                    "leaveid": a.leave.Leaveid,
                    "status": e,
                    "summary": l.summary
                };
                p["default"].post("/api/leaves/approvalto", n).then(function(a) {
                    t.props.form.resetFields(), 1 == a.code ? (d.message.success(a.msg), t.props.onOk({
                        "status": e
                    })) : d.message.error(a.msg);
                })["catch"](function(e) {});
            },
            "handleCancel": function() {
                this.props.form.resetFields(), this.props.onCancel();
            },
            "handleSubmit": function(e) {
                var t = this;
                e.preventDefault();
                var a = this.props.form.getFieldsValue(), l = {};
                l.type = parseInt(a.type), l.started = Math.floor(new Date(a.started).getTime() / 1e3), 
                l.ended = Math.floor(new Date(a.ended).getTime() / 1e3), l.approverid = a.approverid.join(","), 
                l.ccerid = a.ccerid.join(","), l.days = a.days, l.reason = a.reason, p["default"].post("/api/leaves/addto", l).then(function(e) {
                    1 == e.code ? (d.message.success(e.msg), t.props.form.resetFields(), t.props.onCancel({
                        "visible": !t.props.visible,
                        "type": "qj"
                    })) : d.message.error(e.msg);
                })["catch"](function(e) {});
            },
            "render": function() {
                var e = this.props.form, t = e.getFieldProps, a = (e.getFieldValue, this.props), l = a.operationType, n = a.visible, i = void 0, o = void 0, c = void 0, p = void 0, f = [], m = [], g = [];
                if (l) {
                    if (i = this.props.formData, o = i.approvers && i.approvers.map(function(e, t) {
                        return 1 == e.Status ? (0, s["default"])(e, {
                            "status": "finish",
                            "title": "已完成",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }) : 0 == e.Status ? (0, s["default"])(e, {
                            "status": "process",
                            "title": "进行中",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }) : (0, s["default"])(e, {
                            "status": "error",
                            "title": "已拒绝",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }), u["default"].createElement(y, {
                            "key": t,
                            "title": e.Realname + " " + e.title,
                            "status": e.status,
                            "description": 0 != e.Status ? e.description : null
                        });
                    }), i.ccers && i.ccers.map(function(e, t) {
                        f.push(e.Realname);
                    }), !i.is_applyer) switch (i.checkStatus) {
                      case 0:
                        c = [ u["default"].createElement(d.Button, {
                            "key": "back",
                            "type": "ghost",
                            "size": "large",
                            "onClick": this.handleOk.bind(this, 2)
                        }, "不同意"), u["default"].createElement(d.Button, {
                            "key": "submit",
                            "type": "primary",
                            "size": "large",
                            "loading": this.state.loading,
                            "onClick": this.handleOk.bind(this, 1)
                        }, "同 意") ];
                        break;

                      case 1:
                        c = [ u["default"].createElement(d.Tag, {
                            "color": "blue"
                        }, "已通过") ];
                        break;

                      case 2:
                        c = [ u["default"].createElement(d.Tag, {
                            "color": "red"
                        }, "未通过") ];
                    }
                    if (i.is_approver) {
                        var C = i.approvers.find(function(e) {
                            return e.Userid == h["default"].get("userId");
                        });
                        p = C && C.Summary;
                    } else i.is_applyer ? p = "申请人意见" : i.is_ccer && (p = "抄送人意见");
                } else {
                    i = this.state.formData;
                    var E = this.props, w = E.types;
                    E.approverlist.map(function(e, t) {
                        m.push(u["default"].createElement(d.Select.Option, {
                            "key": e.Userid
                        }, e.Realname));
                    }), w.map(function(e, t) {
                        g.push(u["default"].createElement(d.Select.Option, {
                            "key": e.Id
                        }, e.Name));
                    }), c = [ u["default"].createElement(d.Button, {
                        "key": "submit",
                        "type": "primary",
                        "size": "large",
                        "loading": this.state.loading,
                        "onClick": this.handleSubmit
                    }, "提 交") ];
                }
                return u["default"].createElement(d.Modal, {
                    "title": "请假",
                    "visible": n,
                    "onOk": this.handleOk,
                    "onCancel": this.handleCancel,
                    "footer": c
                }, l ? u["default"].createElement(d.Form, {
                    "horizontal": !0
                }, u["default"].createElement(b, {
                    "label": "申请人：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 6
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.leave && i.leave.Realname,
                    "disabled": !0
                })), u["default"].createElement(b, {
                    "label": "请假类型：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 6
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.leave && i.leave.Typename,
                    "disabled": !0
                })), u["default"].createElement(b, {
                    "label": "起止时间：",
                    "labelCol": {
                        "span": 6
                    }
                }, u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "startDate",
                    "value": (0, v.timeStampToStr)(i.leave && i.leave.Started, "y-m-d"),
                    "disabled": !0
                })), u["default"].createElement(d.Col, {
                    "span": "1"
                }, u["default"].createElement("p", {
                    "className": "ant-form-split"
                }, "-")), u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "endDate",
                    "value": (0, v.timeStampToStr)(i.leave && i.leave.Ended, "y-m-d"),
                    "disabled": !0
                }))), u["default"].createElement(b, {
                    "label": "请假天数：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 10
                    }
                }, u["default"].createElement(d.InputNumber, {
                    "size": "large",
                    "min": 1,
                    "max": 10,
                    "style": {
                        "width": 100
                    },
                    "value": i.leave && i.leave.Days,
                    "name": "inputNumber",
                    "disabled": !0
                }), u["default"].createElement("span", {
                    "className": "ant-form-text"
                }, " 天")), u["default"].createElement(b, {
                    "id": "control-textarea",
                    "label": "请假事由：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "value": i.leave && i.leave.Reason,
                    "id": "control-textarea",
                    "rows": "3",
                    "disabled": !0
                })), u["default"].createElement(b, {
                    "label": "审批人：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Steps, {
                    "style": {
                        "paddingTop": "7px"
                    },
                    "size": "small",
                    "direction": "vertical"
                }, o)), i.ccers && u["default"].createElement(b, {
                    "label": "抄送人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "defaultValue": f,
                    "onChange": this.handleChange1,
                    "disabled": !0
                })), 0 == i.checkStatus ? u["default"].createElement(b, {
                    "label": "审批意见：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, (0, r["default"])({
                    "type": "textarea",
                    "rows": "3",
                    "name": "summary"
                }, t("summary")))) : u["default"].createElement(b, {
                    "label": "审批意见：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "rows": "3",
                    "value": p || "无"
                }))) : u["default"].createElement(d.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, u["default"].createElement(b, {
                    "label": "请假类型：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 16
                    },
                    "required": !0
                }, u["default"].createElement(d.Select, (0, r["default"])({
                    "size": "large",
                    "style": {
                        "width": 200
                    },
                    "name": "type"
                }, t("type")), g)), u["default"].createElement(b, {
                    "label": "起止时间：",
                    "labelCol": {
                        "span": 6
                    },
                    "required": !0
                }, u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, (0, r["default"])({
                    "name": "started"
                }, t("started")))), u["default"].createElement(d.Col, {
                    "span": "1"
                }, u["default"].createElement("p", {
                    "className": "ant-form-split"
                }, "-")), u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, (0, r["default"])({
                    "name": "ended"
                }, t("ended"))))), u["default"].createElement(b, {
                    "label": "请假天数：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 10
                    }
                }, u["default"].createElement(d.InputNumber, (0, r["default"])({
                    "size": "large",
                    "min": 1,
                    "max": 10,
                    "style": {
                        "width": 100
                    },
                    "name": "days"
                }, t("days"))), u["default"].createElement("span", {
                    "className": "ant-form-text"
                }, " 天")), u["default"].createElement(b, {
                    "label": "请假事由：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Input, (0, r["default"])({
                    "type": "textarea",
                    "placeholder": "请输入",
                    "rows": "3",
                    "name": "reason"
                }, t("reason")))), u["default"].createElement(b, {
                    "label": "审批人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Select, (0, r["default"])({
                    "multiple": !0,
                    "name": "approverid"
                }, t("approverid")), m)), u["default"].createElement(b, {
                    "label": "抄送人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Select, (0, r["default"])({
                    "multiple": !0,
                    "name": "ccerid"
                }, t("ccerid")), m))));
            }
        });
        t["default"] = d.Form.create({})(g);
    },
    "180": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(10), r = l(n), i = a(4), s = l(i), o = a(7), u = a(26), d = a(9), c = l(d), p = o.Form.Item, f = (o.Select.Option, 
        o.Steps.Step, o.DatePicker.RangePicker), m = [ {
            "id": "-1",
            "value": "无"
        }, {
            "id": "0",
            "value": "日程开始时"
        }, {
            "id": "5",
            "value": "提前五分钟"
        }, {
            "id": "15",
            "value": "提前十五分钟"
        }, {
            "id": "30",
            "value": "提前三十分钟"
        }, {
            "id": "60",
            "value": "提前一小时"
        }, {
            "id": "1440",
            "value": "提前一天"
        } ], h = [ {
            "id": "0",
            "value": "不重复"
        }, {
            "id": "1",
            "value": "每天"
        }, {
            "id": "7",
            "value": "每周"
        }, {
            "id": "14",
            "value": "每两周"
        }, {
            "id": "30",
            "value": "每月"
        }, {
            "id": "365",
            "value": "每年"
        } ], v = [], b = [];
        m.map(function(e, t) {
            v.push(s["default"].createElement(o.Select.Option, {
                "key": e.id
            }, e.value));
        }), h.map(function(e, t) {
            b.push(s["default"].createElement(o.Select.Option, {
                "key": e.id
            }, e.value));
        });
        var y = s["default"].createClass({
            "displayName": "RCModal",
            "mixins": [ o.Form.ValueMixin ],
            "getInitialState": function() {
                return {
                    "start": "",
                    "end": ""
                };
            },
            "onDateChange": function(e, t) {
                this.setState({
                    "start": t[0],
                    "end": t[1]
                });
            },
            "handleChange": function(e) {
                this.setState({
                    "summary": e.target.value
                });
            },
            "handleOk": function(e) {
                var t = this.props.formData, a = {
                    "approveid": t.checkApproverid,
                    "gooutid": t.goout.Gooutid,
                    "status": e,
                    "summary": this.state.summary
                };
                c["default"].POST("goouts/approvalto", a).then(function(e) {
                    1 == e.code ? o.message.success(e.msg) : o.message.error(e.msg);
                })["catch"](function(e) {}), this.props.onOk({
                    "visible": !this.props.visible,
                    "type": "wc"
                });
            },
            "handleCancel": function() {
                this.props.onCancel({
                    "visible": !this.props.visible
                });
            },
            "handleSubmit": function(e) {
                var t = this;
                e.preventDefault();
                var a = this.state, l = a.start, n = a.end, r = this.props.form.getFieldsValue(), i = {};
                i.reason = r.reason, i.started = l, i.ended = n, i.remind = r.remind, i.repeat = r.repeat, 
                c["default"].POST("/schedule/do_add", i).then(function(e) {
                    1 == e.code ? (o.message.success(e.msg), t.props.form.resetFields(), t.props.onOk({
                        "status": status
                    })) : o.message.error(e.msg);
                })["catch"](function(e) {});
            },
            "render": function() {
                var e = this.props.form.getFieldProps, t = void 0, a = void 0, l = void 0, n = this.props.operationType;
                n && (t = this.props.formData, m.map(function(e) {
                    if (e.id == t.Remind) return void (a = e.value);
                }), h.map(function(e) {
                    if (e.id == t.Repeat) return void (l = e.value);
                })), n || (t = this.state.formData);
                var i = void 0;
                n || (i = [ s["default"].createElement(o.Button, {
                    "key": "submit",
                    "type": "primary",
                    "size": "large",
                    "loading": this.state.loading,
                    "onClick": this.handleSubmit
                }, "提交") ]);
                var d = this.props.visible;
                return s["default"].createElement(o.Modal, {
                    "title": "日程",
                    "visible": d,
                    "onOk": this.handleOk,
                    "onCancel": this.handleCancel,
                    "footer": i
                }, n ? s["default"].createElement(o.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, s["default"].createElement(p, {
                    "label": "日程内容：",
                    "labelCol": {
                        "span": 5
                    },
                    "wrapperCol": {
                        "span": 15
                    }
                }, s["default"].createElement(o.Input, {
                    "type": "textarea",
                    "rows": "3",
                    "value": t.Reason,
                    "disabled": !0
                })), s["default"].createElement(p, {
                    "label": "起止时间：",
                    "labelCol": {
                        "span": 5
                    },
                    "wrapperCol": {
                        "span": 15
                    }
                }, s["default"].createElement(f, {
                    "format": "yyyy-MM-dd HH:mm",
                    "value": [ (0, u.timeStampToStr)(t.Start, "y-m-d h:i:s"), (0, u.timeStampToStr)(t.Start, "y-m-d h:i:s") ],
                    "disabled": !0
                })), s["default"].createElement(o.Row, null, s["default"].createElement(o.Col, {
                    "span": "12"
                }, s["default"].createElement(p, {
                    "label": "提醒：",
                    "labelCol": {
                        "span": 12
                    },
                    "wrapperCol": {
                        "span": 9
                    }
                }, s["default"].createElement(o.Input, {
                    "value": a,
                    "disabled": !0
                }))), s["default"].createElement(o.Col, {
                    "span": "12"
                }, s["default"].createElement(p, {
                    "label": "重复：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 9
                    }
                }, s["default"].createElement(o.Input, {
                    "value": l,
                    "disabled": !0
                }))))) : s["default"].createElement(o.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, s["default"].createElement(p, {
                    "label": "日程内容：",
                    "labelCol": {
                        "span": 5
                    },
                    "wrapperCol": {
                        "span": 15
                    },
                    "required": !0
                }, s["default"].createElement(o.Input, (0, r["default"])({
                    "type": "textarea",
                    "rows": "3"
                }, e("reason")))), s["default"].createElement(p, {
                    "label": "起止时间：",
                    "labelCol": {
                        "span": 5
                    },
                    "wrapperCol": {
                        "span": 15
                    },
                    "required": !0
                }, s["default"].createElement(f, {
                    "showTime": !0,
                    "format": "yyyy-MM-dd HH:mm",
                    "onChange": this.onDateChange
                })), s["default"].createElement(o.Row, null, s["default"].createElement(o.Col, {
                    "span": "12"
                }, s["default"].createElement(p, {
                    "label": "提醒：",
                    "labelCol": {
                        "span": 10
                    },
                    "wrapperCol": {
                        "span": 12
                    },
                    "required": !0
                }, s["default"].createElement(o.Select, (0, r["default"])({
                    "size": "large",
                    "style": {
                        "width": 110
                    },
                    "name": "remind"
                }, e("remind")), v))), s["default"].createElement(o.Col, {
                    "span": "12"
                }, s["default"].createElement(p, {
                    "label": "重复：",
                    "labelCol": {
                        "span": 5
                    },
                    "wrapperCol": {
                        "span": 10
                    },
                    "required": !0
                }, s["default"].createElement(o.Select, (0, r["default"])({
                    "size": "large",
                    "style": {
                        "width": 110
                    },
                    "name": "repeat"
                }, e("repeat")), b))))));
            }
        });
        t["default"] = o.Form.create()(y);
    },
    "181": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(10), r = l(n), i = a(25), s = l(i), o = a(4), u = l(o), d = a(7), c = a(26), p = a(9), f = l(p), m = a(27), h = l(m), v = d.Form.Item, b = (d.Select.Option, 
        d.Steps.Step), y = u["default"].createClass({
            "displayName": "WCModal",
            "mixins": [ d.Form.ValueMixin ],
            "getInitialState": function() {
                return {
                    "formData": {
                        "type": void 0,
                        "started": void 0,
                        "ended": void 0,
                        "hours": void 0,
                        "reason": void 0,
                        "picture": void 0,
                        "approverid": [],
                        "ccerid": []
                    },
                    "summary": ""
                };
            },
            "handleUpload": function(e) {
                e.file.status, "done" === e.file.status ? d.message.success(e.file.name + " 上传成功。") : "error" === e.file.status && d.message.error(e.file.name + " 上传失败。");
            },
            "handleChange": function(e) {
                this.setState({
                    "summary": e.target.value
                });
            },
            "handleOk": function(e) {
                var t = this.props.formData, a = this.props.form.getFieldsValue(), l = {
                    "approveid": t.checkApproverid,
                    "gooutid": t.goout.Gooutid,
                    "status": e,
                    "summary": a.summary
                };
                f["default"].POST("goouts/approvalto", l).then(function(e) {
                    1 == e.code ? d.message.success(e.msg) : d.message.error(e.msg);
                })["catch"](function(e) {}), this.props.onOk({
                    "visible": !this.props.visible,
                    "type": "wc"
                });
            },
            "handleCancel": function() {
                var e = {
                    "type": void 0,
                    "started": void 0,
                    "ended": void 0,
                    "hours": void 0,
                    "reason": void 0,
                    "picture": void 0,
                    "approverid": [],
                    "ccerid": []
                };
                this.setState({
                    "formData": e
                }), this.props.onCancel({
                    "visible": !this.props.visible,
                    "type": "wc"
                });
            },
            "handleSubmit": function(e) {
                var t = this;
                e.preventDefault();
                var a = this.state.formData;
                a.started = Math.floor(new Date(a.started).getTime() / 1e3), a.ended = Math.floor(new Date(a.ended).getTime() / 1e3), 
                a.approverid = a.approverid.join(","), a.ccerid = a.ccerid.join(","), f["default"].POST("goouts/addto", a).then(function(e) {
                    1 == e.code ? (d.message.success(e.msg), t.props.form.resetFields(), t.props.onOk({
                        "status": status
                    })) : d.message.error(e.msg);
                })["catch"](function(e) {});
            },
            "render": function() {
                var e = this.props.form, t = e.getFieldProps, a = (e.getFieldValue, this.props), l = a.operationType, n = a.visible, i = void 0, o = void 0, p = void 0, f = void 0, m = [], y = [];
                if (l) {
                    if (i = this.props.formData, o = i.approvers && i.approvers.map(function(e, t) {
                        return 1 == e.Status ? (0, s["default"])(e, {
                            "status": "finish",
                            "title": "已完成",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }) : 0 == e.Status ? (0, s["default"])(e, {
                            "status": "process",
                            "title": "进行中",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }) : (0, s["default"])(e, {
                            "status": "error",
                            "title": "已拒绝",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }), u["default"].createElement(b, {
                            "key": t,
                            "title": e.Realname + " " + e.title,
                            "status": e.status,
                            "description": 0 != e.Status ? e.description : null
                        });
                    }), i.ccers && i.ccers.map(function(e, t) {
                        m.push(e.Realname);
                    }), !i.is_applyer) switch (i.checkStatus) {
                      case 0:
                        p = [ u["default"].createElement(d.Button, {
                            "key": "back",
                            "type": "ghost",
                            "size": "large",
                            "onClick": this.handleOk.bind(this, 2)
                        }, "不同意"), u["default"].createElement(d.Button, {
                            "key": "submit",
                            "type": "primary",
                            "size": "large",
                            "loading": this.state.loading,
                            "onClick": this.handleOk.bind(this, 1)
                        }, "同 意") ];
                        break;

                      case 1:
                        p = [ u["default"].createElement(d.Tag, {
                            "color": "blue"
                        }, "已通过") ];
                        break;

                      case 2:
                        p = [ u["default"].createElement(d.Tag, {
                            "color": "red"
                        }, "未通过") ];
                    }
                    if (i.is_approver) {
                        var g = i.approvers.find(function(e) {
                            return e.Userid == h["default"].get("userId");
                        });
                        f = g && g.Summary;
                    } else i.is_applyer ? f = "申请人意见" : i.is_ccer && (f = "抄送人意见");
                } else {
                    i = this.state.formData;
                    var C = this.props;
                    C.types;
                    C.approverlist.map(function(e, t) {
                        y.push(u["default"].createElement(d.Select.Option, {
                            "key": e.Userid
                        }, e.Realname));
                    }), p = [ u["default"].createElement(d.Button, {
                        "key": "submit",
                        "type": "primary",
                        "size": "large",
                        "loading": this.state.loading,
                        "onClick": this.handleSubmit
                    }, "提 交") ];
                }
                return u["default"].createElement(d.Modal, {
                    "title": "外出",
                    "visible": n,
                    "onOk": this.handleOk,
                    "onCancel": this.handleCancel,
                    "footer": p
                }, l ? u["default"].createElement(d.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, u["default"].createElement(v, {
                    "label": "申请人：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 6
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.goout.Realname,
                    "disabled": !0
                })), u["default"].createElement(v, {
                    "label": "起止时间：",
                    "labelCol": {
                        "span": 6
                    }
                }, u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "startDate",
                    "onChange": this.setValue.bind(this, "startDate"),
                    "value": (0, c.timeStampToStr)(i.goout.Created, "y-m-d"),
                    "disabled": !0
                })), u["default"].createElement(d.Col, {
                    "span": "1"
                }, u["default"].createElement("p", {
                    "className": "ant-form-split"
                }, "-")), u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "endDate",
                    "onChange": this.setValue.bind(this, "endDate"),
                    "value": (0, c.timeStampToStr)(i.goout.Ended, "y-m-d"),
                    "disabled": !0
                }))), u["default"].createElement(v, {
                    "label": "小时数：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.goout.Hours,
                    "disabled": !0
                })), u["default"].createElement(v, {
                    "label": "外出事由：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "rows": "3",
                    "value": i.goout.Reason,
                    "disabled": !0
                })), u["default"].createElement(v, {
                    "label": "审批人：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Steps, {
                    "style": {
                        "paddingTop": "7px"
                    },
                    "size": "small",
                    "direction": "vertical"
                }, o)), i.ccers && u["default"].createElement(v, {
                    "label": "抄送人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "defaultValue": m,
                    "onChange": this.handleChange1,
                    "disabled": !0
                })), 0 == i.checkStatus ? u["default"].createElement(v, {
                    "label": "审批意见：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, (0, r["default"])({
                    "type": "textarea",
                    "rows": "3",
                    "name": "summary"
                }, t("summary")))) : u["default"].createElement(v, {
                    "label": "审批意见：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "rows": "3",
                    "value": f || "无"
                }))) : u["default"].createElement(d.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, u["default"].createElement(v, {
                    "label": "起止时间：",
                    "labelCol": {
                        "span": 6
                    },
                    "required": !0
                }, u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "started",
                    "onChange": this.setValue.bind(this, "started")
                })), u["default"].createElement(d.Col, {
                    "span": "1"
                }, u["default"].createElement("p", {
                    "className": "ant-form-split"
                }, "-")), u["default"].createElement(d.Col, {
                    "span": "6"
                }, u["default"].createElement(d.DatePicker, {
                    "name": "ended",
                    "onChange": this.setValue.bind(this, "ended")
                }))), u["default"].createElement(v, {
                    "id": "control-input",
                    "label": "小时数：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "id": "control-input",
                    "placeholder": "请输入...",
                    "name": "hours",
                    "value": i.hours,
                    "onChange": this.setValue.bind(this, "hours")
                })), u["default"].createElement(v, {
                    "id": "control-textarea",
                    "label": "外出事由：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "placeholder": "请输入",
                    "id": "control-textarea",
                    "rows": "3",
                    "name": "reason",
                    "value": i.reason,
                    "onChange": this.setValue.bind(this, "reason")
                })), u["default"].createElement(v, {
                    "label": "审批人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "name": "approverid",
                    "value": i.approverid,
                    "onChange": this.setValue.bind(this, "approverid")
                }, y)), u["default"].createElement(v, {
                    "label": "抄送人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "name": "ccerid",
                    "value": i.ccerid,
                    "onChange": this.setValue.bind(this, "ccerid")
                }, y))));
            }
        });
        t["default"] = d.Form.create({})(y);
    },
    "182": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(10), r = l(n), i = a(25), s = l(i), o = a(4), u = l(o), d = a(7), c = (a(26), 
        a(9)), p = l(c), f = a(27), m = l(f), h = d.Form.Item, v = (d.Select.Option, d.Steps.Step), b = u["default"].createClass({
            "displayName": "WPModal",
            "mixins": [ d.Form.ValueMixin ],
            "getInitialState": function() {
                return {
                    "formData": {
                        "purpose": void 0,
                        "names": void 0,
                        "quantitys": void 0,
                        "content": void 0,
                        "picture": void 0,
                        "approverid": [],
                        "ccerid": []
                    },
                    "summary": ""
                };
            },
            "handleUpload": function(e) {
                e.file.status, "done" === e.file.status ? d.message.success(e.file.name + " 上传成功。") : "error" === e.file.status && d.message.error(e.file.name + " 上传失败。");
            },
            "handleChange": function(e) {
                this.setState({
                    "summary": e.target.value
                });
            },
            "handleOk": function(e) {
                var t = this, a = this.props.formData, l = {
                    "approveid": a.checkApproverid,
                    "oagoodid": a.oagoods.Oagoodid,
                    "status": e,
                    "summary": this.state.summary
                };
                p["default"].POST("oagoods/approvalto", l).then(function(a) {
                    1 == a.code ? (d.message.success(a.msg), t.props.onOk({
                        "status": e
                    })) : d.message.error(a.msg);
                })["catch"](function(e) {});
            },
            "handleCancel": function() {
                var e = {
                    "purpose": void 0,
                    "names": void 0,
                    "quantitys": void 0,
                    "content": void 0,
                    "picture": void 0,
                    "approverid": [],
                    "ccerid": []
                };
                this.setState({
                    "formData": e
                }), this.props.onCancel();
            },
            "handleSubmit": function(e) {
                var t = this;
                e.preventDefault();
                var a = this.state.formData;
                a.started = Math.floor(new Date(a.started).getTime() / 1e3), a.ended = Math.floor(new Date(a.ended).getTime() / 1e3), 
                a.approverid = a.approverid.join(","), a.ccerid = a.ccerid.join(","), p["default"].POST("oagoods/addto", a).then(function(e) {
                    1 == e.code ? (d.message.success(e.msg), t.props.form.resetFields(), t.props.onCancel({
                        "visible": !t.props.visible,
                        "type": "wp"
                    })) : d.message.error(e.msg);
                })["catch"](function(e) {});
            },
            "render": function() {
                var e = this.props.form, t = e.getFieldProps, a = (e.getFieldValue, this.props), l = a.operationType, n = a.visible, i = void 0, o = void 0, c = void 0, p = void 0, f = [], b = [];
                if (l) {
                    if (i = this.props.formData, o = i.approvers && i.approvers.map(function(e, t) {
                        return 1 == e.Status ? (0, s["default"])(e, {
                            "status": "finish",
                            "title": "已完成",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }) : 0 == e.Status ? (0, s["default"])(e, {
                            "status": "process",
                            "title": "进行中",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }) : (0, s["default"])(e, {
                            "status": "error",
                            "title": "已拒绝",
                            "description": "审批意见： " + (e.Summary ? e.Summary : "无")
                        }), u["default"].createElement(v, {
                            "key": t,
                            "title": e.Realname + " " + e.title,
                            "status": e.status,
                            "description": 0 != e.Status ? e.description : null
                        });
                    }), i.ccers && i.ccers.map(function(e, t) {
                        f.push(e.Realname);
                    }), !i.is_applyer) switch (i.checkStatus) {
                      case 0:
                        c = [ u["default"].createElement(d.Button, {
                            "key": "back",
                            "type": "ghost",
                            "size": "large",
                            "onClick": this.handleOk.bind(this, 2)
                        }, "不同意"), u["default"].createElement(d.Button, {
                            "key": "submit",
                            "type": "primary",
                            "size": "large",
                            "loading": this.state.loading,
                            "onClick": this.handleOk.bind(this, 1)
                        }, "同 意") ];
                        break;

                      case 1:
                        c = [ u["default"].createElement(d.Tag, {
                            "color": "blue"
                        }, "已通过") ];
                        break;

                      case 2:
                        c = [ u["default"].createElement(d.Tag, {
                            "color": "red"
                        }, "未通过") ];
                    }
                    if (i.is_approver) {
                        var y = i.approvers.find(function(e) {
                            return e.Userid == m["default"].get("userId");
                        });
                        p = y && y.Summary;
                    } else i.is_applyer ? p = "申请人意见" : i.is_ccer && (p = "抄送人意见");
                } else {
                    i = this.state.formData;
                    var g = this.props;
                    g.types;
                    g.approverlist.map(function(e, t) {
                        b.push(u["default"].createElement(d.Select.Option, {
                            "key": e.Userid
                        }, e.Realname));
                    }), c = [ u["default"].createElement(d.Button, {
                        "key": "submit",
                        "type": "primary",
                        "size": "large",
                        "loading": this.state.loading,
                        "onClick": this.handleSubmit
                    }, "提 交") ];
                }
                return u["default"].createElement(d.Modal, {
                    "title": "物品",
                    "visible": n,
                    "onOk": this.handleOk,
                    "onCancel": this.handleCancel,
                    "footer": c
                }, l ? u["default"].createElement(d.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, u["default"].createElement(h, {
                    "label": "申请人：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 6
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.oagoods.Realname,
                    "disabled": !0
                })), u["default"].createElement(d.Row, null, u["default"].createElement(d.Col, {
                    "span": "12"
                }, u["default"].createElement(h, {
                    "label": "物品名称：",
                    "labelCol": {
                        "span": 12
                    },
                    "wrapperCol": {
                        "span": 9
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.oagoods.Names
                }))), u["default"].createElement(d.Col, {
                    "span": "12"
                }, u["default"].createElement(h, {
                    "label": "数量：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 9
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.oagoods.Quantitys
                })))), u["default"].createElement(h, {
                    "label": "物品用途：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "value": i.oagoods.Purpose
                })), u["default"].createElement(h, {
                    "id": "control-textarea",
                    "label": "领用详情：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "value": i.oagoods.Content,
                    "rows": "3"
                })), u["default"].createElement(h, {
                    "label": "审批人：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Steps, {
                    "style": {
                        "paddingTop": "7px"
                    },
                    "size": "small",
                    "direction": "vertical"
                }, o)), i.ccers && u["default"].createElement(h, {
                    "label": "抄送人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "defaultValue": f,
                    "onChange": this.handleChange1,
                    "disabled": !0
                })), 0 == i.checkStatus ? u["default"].createElement(h, {
                    "label": "审批意见：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, (0, r["default"])({
                    "type": "textarea",
                    "rows": "3",
                    "name": "summary"
                }, t("summary")))) : u["default"].createElement(h, {
                    "label": "审批意见：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "rows": "3",
                    "value": p || "无"
                }))) : u["default"].createElement(d.Form, {
                    "horizontal": !0,
                    "onSubmit": this.handleSubmit
                }, u["default"].createElement(d.Row, null, u["default"].createElement(d.Col, {
                    "span": "12"
                }, u["default"].createElement(h, {
                    "label": "物品名称：",
                    "labelCol": {
                        "span": 12
                    },
                    "wrapperCol": {
                        "span": 9
                    },
                    "required": !0
                }, u["default"].createElement(d.Input, {
                    "name": "names",
                    "value": i.names,
                    "onChange": this.setValue.bind(this, "names")
                }))), u["default"].createElement(d.Col, {
                    "span": "12"
                }, u["default"].createElement(h, {
                    "label": "数量：",
                    "labelCol": {
                        "span": 7
                    },
                    "wrapperCol": {
                        "span": 9
                    }
                }, u["default"].createElement(d.Input, {
                    "name": "quantitys",
                    "value": i.quantitys,
                    "onChange": this.setValue.bind(this, "quantitys")
                })))), u["default"].createElement(h, {
                    "id": "control-input",
                    "label": "物品用途：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Input, {
                    "id": "control-input",
                    "placeholder": "Please enter...",
                    "name": "purpose",
                    "value": i.purpose,
                    "onChange": this.setValue.bind(this, "purpose")
                })), u["default"].createElement(h, {
                    "id": "control-textarea",
                    "label": "领用详情：",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Input, {
                    "type": "textarea",
                    "placeholder": "请输入",
                    "id": "control-textarea",
                    "rows": "3",
                    "name": "content",
                    "value": i.content,
                    "onChange": this.setValue.bind(this, "content")
                })), u["default"].createElement(h, {
                    "label": "审批人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    },
                    "required": !0
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "name": "approverid",
                    "value": i.approverid,
                    "onChange": this.setValue.bind(this, "approverid")
                }, b)), u["default"].createElement(h, {
                    "label": "抄送人",
                    "labelCol": {
                        "span": 6
                    },
                    "wrapperCol": {
                        "span": 14
                    }
                }, u["default"].createElement(d.Select, {
                    "multiple": !0,
                    "name": "ccerid",
                    "value": i.ccerid,
                    "onChange": this.setValue.bind(this, "ccerid")
                }, b))));
            }
        });
        t["default"] = d.Form.create({})(b);
    },
    "183": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(47), r = l(n), i = a(25), s = l(i), o = a(10), u = l(o), d = a(16), c = l(d), p = a(17), f = l(p), m = a(18), h = l(m), v = a(20), b = l(v), y = a(19), g = l(y), C = a(4), E = l(C), w = a(7), S = a(69), k = a(93), x = l(k), _ = a(9), D = l(_), M = function(e) {
            function t(e) {
                var a;
                (0, f["default"])(this, t);
                var l = (0, b["default"])(this, (t.__proto__ || (0, c["default"])(t)).call(this, e));
                return l.getTypes = function() {
                    return D["default"].get("/api/leaves/types");
                }, l.getApproverList = function() {
                    return D["default"].get("/api/approver/list");
                }, l.handlePull = function() {
                    var e = l.props.type, t = "";
                    switch (e) {
                      case "qj":
                        t = "api/leaves/approval/leave";
                        break;

                      case "jb":
                        t = "api/overtimes/approval/overtime";
                        break;

                      case "bx":
                        t = "api/expenses/approval/expense";
                        break;

                      case "cc":
                        t = "api/businesstrips/approval/businesstrip";
                        break;

                      case "wc":
                        t = "api/goouts/approval/goout";
                        break;

                      case "wp":
                        t = "api/oagoods/approval/oagoods";
                    }
                    D["default"].get(t).then(function(t) {
                        var a = t.data.list, n = [];
                        a = a.map(function(t) {
                            switch (e) {
                              case "qj":
                                n.push((0, u["default"])({}, t, {
                                    "type": "qj",
                                    "Cates": "请假"
                                }));
                                break;

                              case "jb":
                                n.push((0, u["default"])({}, t, {
                                    "type": "jb",
                                    "Cates": "加班"
                                }));
                                break;

                              case "bx":
                                n.push((0, u["default"])({}, t, {
                                    "type": "bx",
                                    "Cates": "报销"
                                }));
                                break;

                              case "cc":
                                n.push((0, u["default"])({}, t, {
                                    "type": "cc",
                                    "Cates": "出差"
                                }));
                                break;

                              case "wc":
                                n.push((0, u["default"])({}, t, {
                                    "type": "wc",
                                    "Cates": "外出"
                                }));
                                break;

                              case "wp":
                                n.push((0, u["default"])({}, t, {
                                    "type": "wp",
                                    "Cates": "物品"
                                }));
                            }
                        }), l.setState({
                            "list": n,
                            "total": t.data.count
                        });
                    })["catch"](function(e) {});
                }, l.handleSearch = function() {
                    var e = l.props.type;
                    l.setState({
                        "list": []
                    });
                    var t = "";
                    switch (e) {
                      case "qj":
                        t = "leave";
                        break;

                      case "jb":
                        t = "overtime";
                        break;

                      case "bx":
                        t = "expense";
                        break;

                      case "cc":
                        t = "businesstrip";
                        break;

                      case "wc":
                        t = "goout";
                        break;

                      case "wp":
                        t = "oagoods";
                    }
                    D["default"].get("api/search/my_approve", {
                        "params": {
                            "page": l.page,
                            "num": l.num,
                            "cates": t,
                            "status": l.state.status,
                            "keyword": l.state.search
                        }
                    }).then(function(t) {
                        var a = t.data.list, n = [];
                        a = a.map(function(t) {
                            switch (e) {
                              case "qj":
                                n.push((0, u["default"])({}, t, {
                                    "type": "qj",
                                    "Cates": "请假"
                                }));
                                break;

                              case "jb":
                                n.push((0, u["default"])({}, t, {
                                    "type": "jb",
                                    "Cates": "加班"
                                }));
                                break;

                              case "bx":
                                n.push((0, u["default"])({}, t, {
                                    "type": "bx",
                                    "Cates": "报销"
                                }));
                                break;

                              case "cc":
                                n.push((0, u["default"])({}, t, {
                                    "type": "cc",
                                    "Cates": "出差"
                                }));
                                break;

                              case "wc":
                                n.push((0, u["default"])({}, t, {
                                    "type": "wc",
                                    "Cates": "外出"
                                }));
                                break;

                              case "wp":
                                n.push((0, u["default"])({}, t, {
                                    "type": "wp",
                                    "Cates": "物品"
                                }));
                            }
                        }), l.setState({
                            "list": n,
                            "total": t.data.count
                        });
                    })["catch"](function(e) {});
                }, l.handleSearchChange = function(e) {
                    l.setState({
                        "search": e
                    });
                }, l.handleSelectChange = function(e) {
                    l.setState({
                        "status": e
                    });
                }, l.handleUpdate = function(e) {
                    var t = "", a = e.text;
                    switch (a.type) {
                      case "qj":
                        t = "api/leaves/approval", (0, s["default"])(a, {
                            "ApplyId": a.ApplyId ? a.ApplyId : a.Leaveid
                        });
                        break;

                      case "jb":
                        t = "api/overtimes/approval", (0, s["default"])(a, {
                            "ApplyId": a.ApplyId ? a.ApplyId : a.Overtimeid
                        });
                        break;

                      case "bx":
                        t = "api/expenses/approval", (0, s["default"])(a, {
                            "ApplyId": a.ApplyId ? a.ApplyId : a.Expenseid
                        });
                        break;

                      case "cc":
                        t = "api/businesstrips/approval", (0, s["default"])(a, {
                            "ApplyId": a.ApplyId ? a.ApplyId : a.Businesstripid
                        });
                        break;

                      case "wc":
                        t = "api/goouts/approval", (0, s["default"])(a, {
                            "ApplyId": a.ApplyId ? a.ApplyId : a.Gooutid
                        });
                        break;

                      case "wp":
                        t = "api/oagoods/approval", (0, s["default"])(a, {
                            "ApplyId": a.ApplyId ? a.ApplyId : a.Oagoodid
                        });
                    }
                    l.index = e.index, D["default"].get(t, {
                        "params": {
                            "id": a.ApplyId
                        }
                    }).then(function(e) {
                        l.setState({
                            "modalData": e.data,
                            "visible": !0,
                            "operationType": !0
                        });
                    })["catch"](function(e) {});
                }, l.handleAdd = function() {
                    l.setState({
                        "visible": !0,
                        "operationType": !1
                    });
                }, l.handleOk = function(e) {
                    var t = l.state.list, a = t, n = (0, s["default"])(a[l.index], {
                        "Status": e.status
                    });
                    a.splice(l.index, 1), a.unshift(n), l.setState({
                        "visible": !1,
                        "list": a
                    });
                }, l.handleCancel = function(e) {
                    l.setState({
                        "visible": !1
                    });
                }, l.onChange = function(e) {
                    l.setState({
                        "current": e
                    }), l.page = e, l.handlePull();
                }, l.state = (a = {
                    "visible": e.visible,
                    "current": 1,
                    "total": 0,
                    "formData": {
                        "userName": "大眼萌 minion",
                        "password": void 0,
                        "gender": "male",
                        "remark": void 0,
                        "agreement": void 0
                    }
                }, (0, r["default"])(a, "visible", !1), (0, r["default"])(a, "list", []), (0, r["default"])(a, "status", 99), 
                (0, r["default"])(a, "modalData", {}), (0, r["default"])(a, "operationType", !1), 
                (0, r["default"])(a, "types", []), (0, r["default"])(a, "approverlist", []), (0, 
                r["default"])(a, "search", ""), a), l.page = 1, l.num = 10, l.total = 0, l.ApplyId = "", 
                l;
            }
            return (0, g["default"])(t, e), (0, h["default"])(t, [ {
                "key": "componentWillMount",
                "value": function() {
                    var e = this;
                    x["default"].all([ this.getTypes(), this.getApproverList() ]).then(x["default"].spread(function(t, a) {
                        e.setState({
                            "types": t.data,
                            "approverlist": a.data
                        });
                    }));
                }
            }, {
                "key": "componentDidMount",
                "value": function() {
                    this.handlePull();
                }
            }, {
                "key": "render",
                "value": function() {
                    var e = this, t = this.state, a = t.list, l = t.visible, n = t.modalData, r = t.operationType, i = t.types, s = t.approverlist, o = this.props.type, d = [ {
                        "title": "申请人",
                        "dataIndex": "Realname",
                        "width": "200",
                        "key": "Realname",
                        "render": function(e) {
                            return E["default"].createElement("a", null, e);
                        }
                    }, {
                        "title": "申请类型",
                        "width": "150",
                        "className": "column-money",
                        "dataIndex": "Cates",
                        "key": "Cates"
                    }, {
                        "title": "申请理由",
                        "dataIndex": "Reason",
                        "key": "Reason"
                    }, {
                        "title": "审批状态",
                        "dataIndex": "Status",
                        "width": "100",
                        "key": "Status",
                        "render": function(e, t) {
                            var a = void 0;
                            switch (e) {
                              case 0:
                                a = "未审批";
                                break;

                              case 1:
                                a = "已同意";
                                break;

                              case 2:
                                a = "已拒绝";
                            }
                            return E["default"].createElement("span", null, a);
                        }
                    }, {
                        "title": "操作",
                        "key": "operation",
                        "width": "100",
                        "className": "column-operation",
                        "render": function(t, a, l) {
                            var n = {
                                "text": t,
                                "index": l
                            };
                            return E["default"].createElement("span", null, E["default"].createElement(w.Button, {
                                "type": "primary",
                                "htmlType": "submit",
                                "style": {
                                    "marginLeft": "10px"
                                },
                                "onClick": e.handleUpdate.bind(e, n)
                            }, "审批"));
                        }
                    } ], c = void 0, p = {
                        "visible": l,
                        "formData": n,
                        "onOk": this.handleOk,
                        "onCancel": this.handleCancel,
                        "operationType": r,
                        "approverlist": s
                    };
                    switch (o) {
                      case "qj":
                        c = E["default"].createElement(S.QJModal, (0, u["default"])({}, p, {
                            "types": i
                        }));
                        break;

                      case "bx":
                        c = E["default"].createElement(S.BXModal, p);
                        break;

                      case "cc":
                        c = E["default"].createElement(S.CCModal, p);
                        break;

                      case "jb":
                        c = E["default"].createElement(S.JBModal, p);
                        break;

                      case "wc":
                        c = E["default"].createElement(S.WCModal, p);
                        break;

                      case "wp":
                        c = E["default"].createElement(S.WPModal, p);
                    }
                    return E["default"].createElement("div", null, E["default"].createElement("div", {
                        "style": {
                            "marginBottom": "15px"
                        }
                    }, E["default"].createElement(w.Select, {
                        "style": {
                            "width": 120
                        },
                        "onChange": this.handleSelectChange,
                        "allowClear": !0
                    }, E["default"].createElement(w.Select.Option, {
                        "value": "0"
                    }, "未审批"), E["default"].createElement(w.Select.Option, {
                        "value": "1"
                    }, "已同意"), E["default"].createElement(w.Select.Option, {
                        "value": "2"
                    }, "已拒绝")), E["default"].createElement(w.Select, {
                        "combobox": !0,
                        "style": {
                            "width": 200,
                            "marginLeft": "10px"
                        },
                        "onChange": this.handleSearchChange,
                        "filterOption": !1,
                        "searchPlaceholder": "请输入账户名"
                    }, this.state.options), E["default"].createElement(w.Button, {
                        "type": "primary",
                        "htmlType": "submit",
                        "style": {
                            "margin": "0 10px"
                        },
                        "onClick": this.handleSearch
                    }, "搜索"), E["default"].createElement(w.Button, {
                        "type": "primary",
                        "onClick": this.handleAdd
                    }, "添加")), E["default"].createElement("div", null, E["default"].createElement(w.Table, {
                        "columns": d,
                        "dataSource": a,
                        "pagination": {
                            "total": this.state.total,
                            "current": this.state.current,
                            "showSizeChanger": !0,
                            "showQuickJumper": !0,
                            "onShowSizeChange": function(t, a) {
                                e.setState({
                                    "current": t
                                }), e.num = a, e.handlePull();
                            },
                            "onShowQuickJumper": function(t) {
                                e.setState({
                                    "current": t
                                }), e.page = t, e.handlePull();
                            },
                            "onChange": this.onChange
                        }
                    })), c);
                }
            } ]), t;
        }(E["default"].Component);
        t["default"] = M;
    },
    "184": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(47), r = l(n), i = a(10), s = l(i), o = a(16), u = l(o), d = a(17), c = l(d), p = a(18), f = l(p), m = a(20), h = l(m), v = a(19), b = l(v), y = a(4), g = l(y), C = a(7), E = a(69), w = a(9), S = l(w), k = function(e) {
            function t(e) {
                var a;
                (0, c["default"])(this, t);
                var l = (0, h["default"])(this, (t.__proto__ || (0, u["default"])(t)).call(this, e));
                return l.handlePull = function() {
                    var e = l.props.type, t = "";
                    switch (e) {
                      case "qj":
                        t = "leave";
                        break;

                      case "jb":
                        t = "overtime";
                        break;

                      case "bx":
                        t = "expense";
                        break;

                      case "cc":
                        t = "businesstrip";
                        break;

                      case "wc":
                        t = "goout";
                        break;

                      case "wp":
                        t = "oagoods";
                    }
                    S["default"].get("api/user/apply_list", {
                        "params": {
                            "page": l.page,
                            "num": l.num,
                            "cates": t
                        }
                    }).then(function(t) {
                        var a = t.data.list, n = [];
                        a = a.map(function(t) {
                            switch (e) {
                              case "qj":
                                n.push((0, s["default"])({}, t, {
                                    "type": "qj",
                                    "Cates": "请假"
                                }));
                                break;

                              case "jb":
                                n.push((0, s["default"])({}, t, {
                                    "type": "jb",
                                    "Cates": "加班"
                                }));
                                break;

                              case "bx":
                                n.push((0, s["default"])({}, t, {
                                    "type": "bx",
                                    "Cates": "报销"
                                }));
                                break;

                              case "cc":
                                n.push((0, s["default"])({}, t, {
                                    "type": "cc",
                                    "Cates": "出差"
                                }));
                                break;

                              case "wc":
                                n.push((0, s["default"])({}, t, {
                                    "type": "wc",
                                    "Cates": "外出"
                                }));
                                break;

                              case "wp":
                                n.push((0, s["default"])({}, t, {
                                    "type": "wp",
                                    "Cates": "物品"
                                }));
                            }
                        }), l.setState({
                            "list": n,
                            "total": t.data.count
                        });
                    })["catch"](function(e) {});
                }, l.handleSearch = function() {
                    var e = l.props.type;
                    l.setState({
                        "list": []
                    });
                    var t = "";
                    switch (e) {
                      case "qj":
                        t = "leave";
                        break;

                      case "jb":
                        t = "overtime";
                        break;

                      case "bx":
                        t = "expense";
                        break;

                      case "cc":
                        t = "businesstrip";
                        break;

                      case "wc":
                        t = "goout";
                        break;

                      case "wp":
                        t = "oagoods";
                    }
                    S["default"].get("api/search/my_apply", {
                        "params": {
                            "page": l.page,
                            "num": l.num,
                            "cates": t,
                            "result": l.state.status,
                            "keyword": l.state.search
                        }
                    }).then(function(t) {
                        var a = t.data.list, n = [];
                        a = a.map(function(t) {
                            switch (e) {
                              case "qj":
                                n.push((0, s["default"])({}, t, {
                                    "type": "qj",
                                    "Cates": "请假"
                                }));
                                break;

                              case "jb":
                                n.push((0, s["default"])({}, t, {
                                    "type": "jb",
                                    "Cates": "加班"
                                }));
                                break;

                              case "bx":
                                n.push((0, s["default"])({}, t, {
                                    "type": "bx",
                                    "Cates": "报销"
                                }));
                                break;

                              case "cc":
                                n.push((0, s["default"])({}, t, {
                                    "type": "cc",
                                    "Cates": "出差"
                                }));
                                break;

                              case "wc":
                                n.push((0, s["default"])({}, t, {
                                    "type": "wc",
                                    "Cates": "外出"
                                }));
                                break;

                              case "wp":
                                n.push((0, s["default"])({}, t, {
                                    "type": "wp",
                                    "Cates": "物品"
                                }));
                            }
                        }), l.setState({
                            "list": n,
                            "total": t.data.count
                        });
                    })["catch"](function(e) {});
                }, l.handleSearchChange = function(e) {
                    l.setState({
                        "search": e
                    });
                }, l.handleSelectChange = function(e) {
                    l.setState({
                        "status": e
                    });
                }, l.handleUpdate = function(e) {
                    var t = "";
                    switch (e.type) {
                      case "qj":
                        t = "api/leaves/approval";
                        break;

                      case "jb":
                        t = "api/overtimes/approval";
                        break;

                      case "bx":
                        t = "api/expenses/approval";
                        break;

                      case "cc":
                        t = "api/businesstrips/approval";
                        break;

                      case "wc":
                        t = "api/goouts/approval";
                        break;

                      case "wp":
                        t = "api/oagoods/approval";
                    }
                    l.ApplyId = e.ApplyId, S["default"].get(t, {
                        "params": {
                            "id": e.ApplyId
                        }
                    }).then(function(e) {
                        l.setState({
                            "modalData": e.data,
                            "visible": !0,
                            "operationType": !0
                        });
                    })["catch"](function(e) {});
                }, l.handleAdd = function() {
                    l.setState({
                        "visible": !0,
                        "operationType": !1
                    });
                }, l.handleOk = function(e) {
                    var t = l.state.list;
                    l.setState({
                        "visible": !1
                    });
                    var a = t;
                    a.map(function(e, t) {
                        e.ApplyId == l.ApplyId && a.splice(t, 1);
                    }), l.setState({
                        "list": a
                    });
                }, l.handleCancel = function(e) {
                    l.setState({
                        "visible": !1
                    });
                }, l.onChange = function(e) {
                    l.setState({
                        "current": e
                    }), l.page = e, l.handlePull();
                }, l.state = (a = {
                    "visible": e.visible,
                    "current": 1,
                    "total": 0
                }, (0, r["default"])(a, "visible", !1), (0, r["default"])(a, "list", []), (0, r["default"])(a, "status", 99), 
                (0, r["default"])(a, "modalData", {}), (0, r["default"])(a, "operationType", !1), 
                (0, r["default"])(a, "types", []), (0, r["default"])(a, "approverlist", []), (0, 
                r["default"])(a, "search", ""), a), l.page = 1, l.num = 10, l.total = 0, l.ApplyId = "", 
                l;
            }
            return (0, b["default"])(t, e), (0, f["default"])(t, [ {
                "key": "componentDidMount",
                "value": function() {
                    var e = this;
                    this.handlePull(), S["default"].get("api/leaves/types").then(function(t) {
                        e.setState({
                            "types": t.data
                        });
                    })["catch"](function(e) {}), S["default"].get("api/approver/list").then(function(t) {
                        e.setState({
                            "approverlist": t.data
                        });
                    })["catch"](function(e) {});
                }
            }, {
                "key": "render",
                "value": function() {
                    var e = this, t = this.state, a = t.list, l = t.visible, n = t.modalData, r = t.operationType, i = t.types, o = t.approverlist, u = this.props.type, d = [ {
                        "title": "申请人",
                        "dataIndex": "ApplyerName",
                        "width": "200",
                        "key": "ApplyerName",
                        "render": function(e) {
                            return g["default"].createElement("a", null, e);
                        }
                    }, {
                        "title": "申请类型",
                        "width": "150",
                        "className": "column-money",
                        "dataIndex": "Cates",
                        "key": "Cates"
                    }, {
                        "title": "申请理由",
                        "dataIndex": "Reason",
                        "key": "Reason"
                    }, {
                        "title": "审批状态",
                        "dataIndex": "ResultCn",
                        "width": "100",
                        "key": "ResultCn",
                        "render": function(e, t) {
                            return g["default"].createElement("span", null, e);
                        }
                    }, {
                        "title": "操作",
                        "key": "operation",
                        "width": "100",
                        "className": "column-operation",
                        "render": function(t, a) {
                            return g["default"].createElement("span", null, g["default"].createElement(C.Button, {
                                "type": "primary",
                                "htmlType": "submit",
                                "style": {
                                    "marginLeft": "10px"
                                },
                                "onClick": e.handleUpdate.bind(e, t)
                            }, "审批"));
                        }
                    } ], c = void 0, p = {
                        "visible": l,
                        "formData": n,
                        "onOk": this.handleOk,
                        "onCancel": this.handleCancel,
                        "operationType": r,
                        "approverlist": o
                    };
                    switch (u) {
                      case "qj":
                        c = g["default"].createElement(E.QJModal, (0, s["default"])({}, p, {
                            "types": i
                        }));
                        break;

                      case "bx":
                        c = g["default"].createElement(E.BXModal, p);
                        break;

                      case "cc":
                        c = g["default"].createElement(E.CCModal, p);
                        break;

                      case "jb":
                        c = g["default"].createElement(E.JBModal, p);
                        break;

                      case "wc":
                        c = g["default"].createElement(E.WCModal, p);
                        break;

                      case "wp":
                        c = g["default"].createElement(E.WPModal, p);
                    }
                    return g["default"].createElement("div", null, g["default"].createElement("div", {
                        "style": {
                            "marginBottom": "15px"
                        }
                    }, g["default"].createElement(C.Select, {
                        "style": {
                            "width": 120
                        },
                        "onChange": this.handleSelectChange,
                        "allowClear": !0
                    }, g["default"].createElement(C.Select.Option, {
                        "value": "0"
                    }, "未审批"), g["default"].createElement(C.Select.Option, {
                        "value": "1"
                    }, "已同意"), g["default"].createElement(C.Select.Option, {
                        "value": "2"
                    }, "已拒绝")), g["default"].createElement(C.Select, {
                        "combobox": !0,
                        "style": {
                            "width": 200,
                            "marginLeft": "10px"
                        },
                        "onChange": this.handleSearchChange,
                        "filterOption": !1,
                        "searchPlaceholder": "请输入账户名"
                    }, this.state.options), g["default"].createElement(C.Button, {
                        "type": "primary",
                        "htmlType": "submit",
                        "style": {
                            "margin": "0 10px"
                        },
                        "onClick": this.handleSearch
                    }, "搜索"), g["default"].createElement(C.Button, {
                        "type": "primary",
                        "onClick": this.handleAdd
                    }, "添加")), g["default"].createElement("div", null, g["default"].createElement(C.Table, {
                        "columns": d,
                        "dataSource": a,
                        "pagination": {
                            "total": this.state.total,
                            "current": this.state.current,
                            "showSizeChanger": !0,
                            "showQuickJumper": !0,
                            "onShowSizeChange": function(t, a) {
                                e.setState({
                                    "current": t
                                }), e.num = a, e.handlePull();
                            },
                            "onShowQuickJumper": function(t) {
                                e.setState({
                                    "current": t
                                }), e.page = t, e.handlePull();
                            },
                            "onChange": this.onChange
                        }
                    })), c);
                }
            } ]), t;
        }(g["default"].Component);
        t["default"] = k;
    },
    "185": function(e, t, a) {
        var l;
        (function(e, n) {
            (function() {
                function r(e, t) {
                    function a(e, t) {
                        try {
                            e();
                        } catch (a) {
                            t && t();
                        }
                    }
                    function l(e) {
                        if (null != l[e]) return l[e];
                        var n;
                        if ("bug-string-char-index" == e) n = "a" != "a"[0]; else if ("json" == e) n = l("json-stringify") && l("date-serialization") && l("json-parse"); else if ("date-serialization" == e) {
                            if (n = l("json-stringify") && C) {
                                var r = t.stringify;
                                a(function() {
                                    n = '"-271821-04-20T00:00:00.000Z"' == r(new c(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == r(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == r(new c(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == r(new c(-1));
                                });
                            }
                        } else {
                            var s, u = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == e) {
                                var r = t.stringify, d = "function" == typeof r;
                                d && ((s = function() {
                                    return 1;
                                }).toJSON = s, a(function() {
                                    d = "0" === r(0) && "0" === r(new i()) && '""' == r(new o()) && r(y) === v && r(v) === v && r() === v && "1" === r(s) && "[1]" == r([ s ]) && "[null]" == r([ v ]) && "null" == r(null) && "[null,null,null]" == r([ v, y, null ]) && r({
                                        "a": [ s, !0, !1, null, "\0\b\n\f\r\t" ]
                                    }) == u && "1" === r(null, s) && "[\n 1,\n 2\n]" == r([ 1, 2 ], null, 1);
                                }, function() {
                                    d = !1;
                                })), n = d;
                            }
                            if ("json-parse" == e) {
                                var p, f = t.parse;
                                "function" == typeof f && a(function() {
                                    0 !== f("0") || f(!1) || (s = f(u), (p = 5 == s["a"].length && 1 === s["a"][0]) && (a(function() {
                                        p = !f('"\t"');
                                    }), p && a(function() {
                                        p = 1 !== f("01");
                                    }), p && a(function() {
                                        p = 1 !== f("1.");
                                    })));
                                }, function() {
                                    p = !1;
                                }), n = p;
                            }
                        }
                        return l[e] = !!n;
                    }
                    function n(e) {
                        return x(this);
                    }
                    e || (e = u.Object()), t || (t = u.Object());
                    var i = e.Number || u.Number, o = e.String || u.String, d = e.Object || u.Object, c = e.Date || u.Date, p = e.SyntaxError || u.SyntaxError, f = e.TypeError || u.TypeError, m = e.Math || u.Math, h = e.JSON || u.JSON;
                    "object" == typeof h && h && (t.stringify = h.stringify, t.parse = h.parse);
                    var v, b = d.prototype, y = b.toString, g = b.hasOwnProperty, C = new c(-0xc782b5b800cec);
                    if (a(function() {
                        C = -109252 == C.getUTCFullYear() && 0 === C.getUTCMonth() && 1 === C.getUTCDate() && 10 == C.getUTCHours() && 37 == C.getUTCMinutes() && 6 == C.getUTCSeconds() && 708 == C.getUTCMilliseconds();
                    }), l["bug-string-char-index"] = l["date-serialization"] = l["json"] = l["json-stringify"] = l["json-parse"] = null, 
                    !l("json")) {
                        var E = l("bug-string-char-index"), w = function(e, t) {
                            var a, l, n, r = 0;
                            (a = function() {
                                this.valueOf = 0;
                            }).prototype.valueOf = 0, l = new a();
                            for (n in l) g.call(l, n) && r++;
                            return a = l = null, r ? w = function(e, t) {
                                var a, l, n = "[object Function]" == y.call(e);
                                for (a in e) n && "prototype" == a || !g.call(e, a) || (l = "constructor" === a) || t(a);
                                (l || g.call(e, a = "constructor")) && t(a);
                            } : (l = [ "valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor" ], 
                            w = function(e, t) {
                                var a, n, r = "[object Function]" == y.call(e), i = !r && "function" != typeof e.constructor && s[typeof e.hasOwnProperty] && e.hasOwnProperty || g;
                                for (a in e) r && "prototype" == a || !i.call(e, a) || t(a);
                                for (n = l.length; a = l[--n]; ) i.call(e, a) && t(a);
                            }), w(e, t);
                        };
                        if (!l("json-stringify") && !l("date-serialization")) {
                            var S = {
                                "92": "\\\\",
                                "34": '\\"',
                                "8": "\\b",
                                "12": "\\f",
                                "10": "\\n",
                                "13": "\\r",
                                "9": "\\t"
                            }, k = function(e, t) {
                                return ("000000" + (t || 0)).slice(-e);
                            }, x = function(e) {
                                var t, a, l, n, r, i, s, o, u;
                                if (C) t = function(e) {
                                    a = e.getUTCFullYear(), l = e.getUTCMonth(), n = e.getUTCDate(), i = e.getUTCHours(), 
                                    s = e.getUTCMinutes(), o = e.getUTCSeconds(), u = e.getUTCMilliseconds();
                                }; else {
                                    var d = m.floor, c = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], p = function(e, t) {
                                        return c[t] + 365 * (e - 1970) + d((e - 1969 + (t = +(t > 1))) / 4) - d((e - 1901 + t) / 100) + d((e - 1601 + t) / 400);
                                    };
                                    t = function(e) {
                                        for (n = d(e / 864e5), a = d(n / 365.2425) + 1970 - 1; p(a + 1, 0) <= n; a++) ;
                                        for (l = d((n - p(a, 0)) / 30.42); p(a, l + 1) <= n; l++) ;
                                        n = 1 + n - p(a, l), r = (e % 864e5 + 864e5) % 864e5, i = d(r / 36e5) % 24, s = d(r / 6e4) % 60, 
                                        o = d(r / 1e3) % 60, u = r % 1e3;
                                    };
                                }
                                return (x = function(e) {
                                    return e > -1 / 0 && e < 1 / 0 ? (t(e), e = (a <= 0 || a >= 1e4 ? (a < 0 ? "-" : "+") + k(6, a < 0 ? -a : a) : k(4, a)) + "-" + k(2, l + 1) + "-" + k(2, n) + "T" + k(2, i) + ":" + k(2, s) + ":" + k(2, o) + "." + k(3, u) + "Z", 
                                    a = l = n = i = s = o = u = null) : e = null, e;
                                })(e);
                            };
                            if (l("json-stringify") && !l("date-serialization")) {
                                var _ = t.stringify;
                                t.stringify = function(e, t, a) {
                                    var l = c.prototype.toJSON;
                                    c.prototype.toJSON = n;
                                    var r = _(e, t, a);
                                    return c.prototype.toJSON = l, r;
                                };
                            } else {
                                var D = function(e) {
                                    var t = e.charCodeAt(0), a = S[t];
                                    return a || "\\u00" + k(2, t.toString(16));
                                }, M = /[\x00-\x1f\x22\x5c]/g, O = function(e) {
                                    return M.lastIndex = 0, '"' + (M.test(e) ? e.replace(M, D) : e) + '"';
                                }, T = function(e, t, l, n, r, i, s) {
                                    var o, u, d, p, m, h, b, g, C;
                                    if (a(function() {
                                        o = t[e];
                                    }), "object" == typeof o && o && (o.getUTCFullYear && "[object Date]" == y.call(o) && o.toJSON === c.prototype.toJSON ? o = x(o) : "function" == typeof o.toJSON && (o = o.toJSON(e))), 
                                    l && (o = l.call(t, e, o)), o == v) return o === v ? o : "null";
                                    switch (u = typeof o, "object" == u && (d = y.call(o)), d || u) {
                                      case "boolean":
                                      case "[object Boolean]":
                                        return "" + o;

                                      case "number":
                                      case "[object Number]":
                                        return o > -1 / 0 && o < 1 / 0 ? "" + o : "null";

                                      case "string":
                                      case "[object String]":
                                        return O("" + o);
                                    }
                                    if ("object" == typeof o) {
                                        for (b = s.length; b--; ) if (s[b] === o) throw f();
                                        if (s.push(o), p = [], g = i, i += r, "[object Array]" == d) {
                                            for (h = 0, b = o.length; h < b; h++) m = T(h, o, l, n, r, i, s), p.push(m === v ? "null" : m);
                                            C = p.length ? r ? "[\n" + i + p.join(",\n" + i) + "\n" + g + "]" : "[" + p.join(",") + "]" : "[]";
                                        } else w(n || o, function(e) {
                                            var t = T(e, o, l, n, r, i, s);
                                            t !== v && p.push(O(e) + ":" + (r ? " " : "") + t);
                                        }), C = p.length ? r ? "{\n" + i + p.join(",\n" + i) + "\n" + g + "}" : "{" + p.join(",") + "}" : "{}";
                                        return s.pop(), C;
                                    }
                                };
                                t.stringify = function(e, t, a) {
                                    var l, n, r, i;
                                    if (s[typeof t] && t) if ("[object Function]" == (i = y.call(t))) n = t; else if ("[object Array]" == i) {
                                        r = {};
                                        for (var o, u = 0, d = t.length; u < d; ) o = t[u++], "[object String]" != (i = y.call(o)) && "[object Number]" != i || (r[o] = 1);
                                    }
                                    if (a) if ("[object Number]" == (i = y.call(a))) {
                                        if ((a -= a % 1) > 0) for (a > 10 && (a = 10), l = ""; l.length < a; ) l += " ";
                                    } else "[object String]" == i && (l = a.length <= 10 ? a : a.slice(0, 10));
                                    return T("", (o = {}, o[""] = e, o), n, r, l, "", []);
                                };
                            }
                        }
                        if (!l("json-parse")) {
                            var P, I, F = o.fromCharCode, j = {
                                "92": "\\",
                                "34": '"',
                                "47": "/",
                                "98": "\b",
                                "116": "\t",
                                "110": "\n",
                                "102": "\f",
                                "114": "\r"
                            }, N = function() {
                                throw P = I = null, p();
                            }, z = function() {
                                for (var e, t, a, l, n, r = I, i = r.length; P < i; ) switch (n = r.charCodeAt(P)) {
                                  case 9:
                                  case 10:
                                  case 13:
                                  case 32:
                                    P++;
                                    break;

                                  case 123:
                                  case 125:
                                  case 91:
                                  case 93:
                                  case 58:
                                  case 44:
                                    return e = E ? r.charAt(P) : r[P], P++, e;

                                  case 34:
                                    for (e = "@", P++; P < i; ) if ((n = r.charCodeAt(P)) < 32) N(); else if (92 == n) switch (n = r.charCodeAt(++P)) {
                                      case 92:
                                      case 34:
                                      case 47:
                                      case 98:
                                      case 116:
                                      case 110:
                                      case 102:
                                      case 114:
                                        e += j[n], P++;
                                        break;

                                      case 117:
                                        for (t = ++P, a = P + 4; P < a; P++) (n = r.charCodeAt(P)) >= 48 && n <= 57 || n >= 97 && n <= 102 || n >= 65 && n <= 70 || N();
                                        e += F("0x" + r.slice(t, P));
                                        break;

                                      default:
                                        N();
                                    } else {
                                        if (34 == n) break;
                                        for (n = r.charCodeAt(P), t = P; n >= 32 && 92 != n && 34 != n; ) n = r.charCodeAt(++P);
                                        e += r.slice(t, P);
                                    }
                                    if (34 == r.charCodeAt(P)) return P++, e;
                                    N();

                                  default:
                                    if (t = P, 45 == n && (l = !0, n = r.charCodeAt(++P)), n >= 48 && n <= 57) {
                                        for (48 == n && (n = r.charCodeAt(P + 1)) >= 48 && n <= 57 && N(), l = !1; P < i && (n = r.charCodeAt(P)) >= 48 && n <= 57; P++) ;
                                        if (46 == r.charCodeAt(P)) {
                                            for (a = ++P; a < i && !((n = r.charCodeAt(a)) < 48 || n > 57); a++) ;
                                            a == P && N(), P = a;
                                        }
                                        if (101 == (n = r.charCodeAt(P)) || 69 == n) {
                                            for (n = r.charCodeAt(++P), 43 != n && 45 != n || P++, a = P; a < i && !((n = r.charCodeAt(a)) < 48 || n > 57); a++) ;
                                            a == P && N(), P = a;
                                        }
                                        return +r.slice(t, P);
                                    }
                                    l && N();
                                    var s = r.slice(P, P + 4);
                                    if ("true" == s) return P += 4, !0;
                                    if ("fals" == s && 101 == r.charCodeAt(P + 4)) return P += 5, !1;
                                    if ("null" == s) return P += 4, null;
                                    N();
                                }
                                return "$";
                            }, A = function(e) {
                                var t, a;
                                if ("$" == e && N(), "string" == typeof e) {
                                    if ("@" == (E ? e.charAt(0) : e[0])) return e.slice(1);
                                    if ("[" == e) {
                                        for (t = []; "]" != (e = z()); ) a ? "," == e ? "]" == (e = z()) && N() : N() : a = !0, 
                                        "," == e && N(), t.push(A(e));
                                        return t;
                                    }
                                    if ("{" == e) {
                                        for (t = {}; "}" != (e = z()); ) a ? "," == e ? "}" == (e = z()) && N() : N() : a = !0, 
                                        "," != e && "string" == typeof e && "@" == (E ? e.charAt(0) : e[0]) && ":" == z() || N(), 
                                        t[e.slice(1)] = A(z());
                                        return t;
                                    }
                                    N();
                                }
                                return e;
                            }, R = function(e, t, a) {
                                var l = U(e, t, a);
                                l === v ? delete e[t] : e[t] = l;
                            }, U = function(e, t, a) {
                                var l, n = e[t];
                                if ("object" == typeof n && n) if ("[object Array]" == y.call(n)) for (l = n.length; l--; ) R(y, w, n); else w(n, function(e) {
                                    R(n, e, a);
                                });
                                return a.call(e, t, n);
                            };
                            t.parse = function(e, t) {
                                var a, l;
                                return P = 0, I = "" + e, a = A(z()), "$" != z() && N(), P = I = null, t && "[object Function]" == y.call(t) ? U((l = {}, 
                                l[""] = a, l), "", t) : a;
                            };
                        }
                    }
                    return t.runInContext = r, t;
                }
                var i = a(199), s = {
                    "function": !0,
                    "object": !0
                }, o = s[typeof t] && t && !t.nodeType && t, u = s[typeof window] && window || this, d = o && s[typeof e] && e && !e.nodeType && "object" == typeof n && n;
                if (!d || d.global !== d && d.window !== d && d.self !== d || (u = d), o && !i) r(u, o); else {
                    var c = u.JSON, p = u.JSON3, f = !1, m = r(u, u.JSON3 = {
                        "noConflict": function() {
                            return f || (f = !0, u.JSON = c, u.JSON3 = p, c = p = null), m;
                        }
                    });
                    u.JSON = {
                        "parse": m.parse,
                        "stringify": m.stringify
                    };
                }
                i && void 0 !== (l = function() {
                    return m;
                }.call(t, a, t, e)) && (e.exports = l);
            }).call(this);
        }).call(t, a(245)(e), function() {
            return this;
        }());
    },
    "186": function(e, t, a) {
        !function(t, l) {
            e.exports = l(a(41), a(4), a(192), a(193));
        }(0, function(e, t, a, l) {
            return function(e) {
                function t(l) {
                    if (a[l]) return a[l].exports;
                    var n = a[l] = {
                        "exports": {},
                        "id": l,
                        "loaded": !1
                    };
                    return e[l].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports;
                }
                var a = {};
                return t.m = e, t.c = a, t.p = "", t(0);
            }([ function(e, t, a) {
                "use strict";
                function l(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    };
                }
                function n(e, t) {
                    var a = {};
                    for (var l in e) t.indexOf(l) >= 0 || Object.prototype.hasOwnProperty.call(e, l) && (a[l] = e[l]);
                    return a;
                }
                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                function i(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t;
                }
                function s(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        "constructor": {
                            "value": e,
                            "enumerable": !1,
                            "writable": !0,
                            "configurable": !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
                }
                Object.defineProperty(t, "__esModule", {
                    "value": !0
                });
                var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
                    }
                    return e;
                }, u = function() {
                    function e(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var l = t[a];
                            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), 
                            Object.defineProperty(e, l.key, l);
                        }
                    }
                    return function(t, a, l) {
                        return a && e(t.prototype, a), l && e(t, l), t;
                    };
                }(), d = a(1), c = l(d), p = a(2), f = l(p), m = a(3), h = l(m), v = a(4), b = l(v), y = function(e) {
                    function t() {
                        var e, a, l, s;
                        r(this, t);
                        for (var o = arguments.length, u = Array(o), d = 0; d < o; d++) u[d] = arguments[d];
                        return a = l = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(u))), 
                        l._sigPad = null, l._excludeOurProps = function() {
                            var e = l.props;
                            return e.canvasProps, e.clearOnResize, n(e, [ "canvasProps", "clearOnResize" ]);
                        }, l.getCanvas = function() {
                            return l._canvas;
                        }, l.getTrimmedCanvas = function() {
                            var e = document.createElement("canvas");
                            return e.width = l._canvas.width, e.height = l._canvas.height, e.getContext("2d").drawImage(l._canvas, 0, 0), 
                            (0, b["default"])(e);
                        }, l.getSignaturePad = function() {
                            return l._sigPad;
                        }, l._checkClearOnResize = function() {
                            l.props.clearOnResize && l._resizeCanvas();
                        }, l._resizeCanvas = function() {
                            var e = l.props.canvasProps || {}, t = e.width, a = e.height;
                            if (!t || !a) {
                                var n = l._canvas, r = Math.max(window.devicePixelRatio || 1, 1);
                                t || (n.width = n.offsetWidth * r), a || (n.height = n.offsetHeight * r), n.getContext("2d").scale(r, r), 
                                l.clear();
                            }
                        }, l.on = function() {
                            return window.addEventListener("resize", l._checkClearOnResize), l._sigPad.on();
                        }, l.off = function() {
                            return window.removeEventListener("resize", l._checkClearOnResize), l._sigPad.off();
                        }, l.clear = function() {
                            return l._sigPad.clear();
                        }, l.isEmpty = function() {
                            return l._sigPad.isEmpty();
                        }, l.fromDataURL = function(e, t) {
                            return l._sigPad.fromDataURL(e, t);
                        }, l.toDataURL = function(e, t) {
                            return l._sigPad.toDataURL(e, t);
                        }, l.fromData = function(e) {
                            return l._sigPad.fromData(e);
                        }, l.toData = function() {
                            return l._sigPad.toData();
                        }, s = a, i(l, s);
                    }
                    return s(t, e), u(t, [ {
                        "key": "componentDidMount",
                        "value": function() {
                            this._sigPad = new h["default"](this._canvas, this._excludeOurProps()), this._resizeCanvas(), 
                            this.on();
                        }
                    }, {
                        "key": "componentWillUnmount",
                        "value": function() {
                            this.off();
                        }
                    }, {
                        "key": "componentDidUpdate",
                        "value": function() {
                            Object.assign(this._sigPad, this._excludeOurProps());
                        }
                    }, {
                        "key": "render",
                        "value": function() {
                            var e = this, t = this.props.canvasProps;
                            return f["default"].createElement("canvas", o({
                                "ref": function(t) {
                                    e._canvas = t;
                                }
                            }, t));
                        }
                    } ]), t;
                }(p.Component);
                y.propTypes = {
                    "velocityFilterWeight": c["default"].number,
                    "minWidth": c["default"].number,
                    "maxWidth": c["default"].number,
                    "minDistance": c["default"].number,
                    "dotSize": c["default"].oneOfType([ c["default"].number, c["default"].func ]),
                    "penColor": c["default"].string,
                    "throttle": c["default"].number,
                    "onEnd": c["default"].func,
                    "onBegin": c["default"].func,
                    "canvasProps": c["default"].object,
                    "clearOnResize": c["default"].bool
                }, y.defaultProps = {
                    "clearOnResize": !0
                }, t["default"] = y;
            }, function(t, a) {
                t.exports = e;
            }, function(e, a) {
                e.exports = t;
            }, function(e, t) {
                e.exports = a;
            }, function(e, t) {
                e.exports = l;
            } ]);
        });
    },
    "192": function(e, t, a) {
        /*!
	 * Signature Pad v2.3.2
	 * https://github.com/szimek/signature_pad
	 *
	 * Copyright 2017 Szymon Nowak
	 * Released under the MIT license
	 *
	 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
	 * http://corner.squareup.com/2012/07/smoother-signatures.html
	 *
	 * Implementation of interpolation using cubic Bézier curves is taken from:
	 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
	 *
	 * Algorithm for approximated length of a Bézier curve is taken from:
	 * http://www.lemoda.net/maths/bezier-length/index.html
	 *
	 */
        !function(t, a) {
            e.exports = a();
        }(0, function() {
            "use strict";
            function e(e, t, a) {
                this.x = e, this.y = t, this.time = a || new Date().getTime();
            }
            function t(e, t, a, l) {
                this.startPoint = e, this.control1 = t, this.control2 = a, this.endPoint = l;
            }
            function a(e, t, a) {
                var l, n, r, i = null, s = 0;
                a || (a = {});
                var o = function() {
                    s = !1 === a.leading ? 0 : Date.now(), i = null, r = e.apply(l, n), i || (l = n = null);
                };
                return function() {
                    var u = Date.now();
                    s || !1 !== a.leading || (s = u);
                    var d = t - (u - s);
                    return l = this, n = arguments, d <= 0 || d > t ? (i && (clearTimeout(i), i = null), 
                    s = u, r = e.apply(l, n), i || (l = n = null)) : i || !1 === a.trailing || (i = setTimeout(o, d)), 
                    r;
                };
            }
            function l(e, t) {
                var n = this, r = t || {};
                this.velocityFilterWeight = r.velocityFilterWeight || .7, this.minWidth = r.minWidth || .5, 
                this.maxWidth = r.maxWidth || 2.5, this.throttle = "throttle" in r ? r.throttle : 16, 
                this.minDistance = "minDistance" in r ? r.minDistance : 5, this.throttle ? this._strokeMoveUpdate = a(l.prototype._strokeUpdate, this.throttle) : this._strokeMoveUpdate = l.prototype._strokeUpdate, 
                this.dotSize = r.dotSize || function() {
                    return (this.minWidth + this.maxWidth) / 2;
                }, this.penColor = r.penColor || "black", this.backgroundColor = r.backgroundColor || "rgba(0,0,0,0)", 
                this.onBegin = r.onBegin, this.onEnd = r.onEnd, this._canvas = e, this._ctx = e.getContext("2d"), 
                this.clear(), this._handleMouseDown = function(e) {
                    1 === e.which && (n._mouseButtonDown = !0, n._strokeBegin(e));
                }, this._handleMouseMove = function(e) {
                    n._mouseButtonDown && n._strokeMoveUpdate(e);
                }, this._handleMouseUp = function(e) {
                    1 === e.which && n._mouseButtonDown && (n._mouseButtonDown = !1, n._strokeEnd(e));
                }, this._handleTouchStart = function(e) {
                    if (1 === e.targetTouches.length) {
                        var t = e.changedTouches[0];
                        n._strokeBegin(t);
                    }
                }, this._handleTouchMove = function(e) {
                    e.preventDefault();
                    var t = e.targetTouches[0];
                    n._strokeMoveUpdate(t);
                }, this._handleTouchEnd = function(e) {
                    e.target === n._canvas && (e.preventDefault(), n._strokeEnd(e));
                }, this.on();
            }
            return e.prototype.velocityFrom = function(e) {
                return this.time !== e.time ? this.distanceTo(e) / (this.time - e.time) : 1;
            }, e.prototype.distanceTo = function(e) {
                return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
            }, e.prototype.equals = function(e) {
                return this.x === e.x && this.y === e.y && this.time === e.time;
            }, t.prototype.length = function() {
                for (var e = 0, t = void 0, a = void 0, l = 0; l <= 10; l += 1) {
                    var n = l / 10, r = this._point(n, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), i = this._point(n, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
                    if (l > 0) {
                        var s = r - t, o = i - a;
                        e += Math.sqrt(s * s + o * o);
                    }
                    t = r, a = i;
                }
                return e;
            }, t.prototype._point = function(e, t, a, l, n) {
                return t * (1 - e) * (1 - e) * (1 - e) + 3 * a * (1 - e) * (1 - e) * e + 3 * l * (1 - e) * e * e + n * e * e * e;
            }, l.prototype.clear = function() {
                var e = this._ctx, t = this._canvas;
                e.fillStyle = this.backgroundColor, e.clearRect(0, 0, t.width, t.height), e.fillRect(0, 0, t.width, t.height), 
                this._data = [], this._reset(), this._isEmpty = !0;
            }, l.prototype.fromDataURL = function(e) {
                var t = this, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = new Image(), n = a.ratio || window.devicePixelRatio || 1, r = a.width || this._canvas.width / n, i = a.height || this._canvas.height / n;
                this._reset(), l.src = e, l.onload = function() {
                    t._ctx.drawImage(l, 0, 0, r, i);
                }, this._isEmpty = !1;
            }, l.prototype.toDataURL = function(e) {
                var t;
                switch (e) {
                  case "image/svg+xml":
                    return this._toSVG();

                  default:
                    for (var a = arguments.length, l = Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) l[n - 1] = arguments[n];
                    return (t = this._canvas).toDataURL.apply(t, [ e ].concat(l));
                }
            }, l.prototype.on = function() {
                this._handleMouseEvents(), this._handleTouchEvents();
            }, l.prototype.off = function() {
                this._canvas.removeEventListener("mousedown", this._handleMouseDown), this._canvas.removeEventListener("mousemove", this._handleMouseMove), 
                document.removeEventListener("mouseup", this._handleMouseUp), this._canvas.removeEventListener("touchstart", this._handleTouchStart), 
                this._canvas.removeEventListener("touchmove", this._handleTouchMove), this._canvas.removeEventListener("touchend", this._handleTouchEnd);
            }, l.prototype.isEmpty = function() {
                return this._isEmpty;
            }, l.prototype._strokeBegin = function(e) {
                this._data.push([]), this._reset(), this._strokeUpdate(e), "function" == typeof this.onBegin && this.onBegin(e);
            }, l.prototype._strokeUpdate = function(e) {
                var t = e.clientX, a = e.clientY, l = this._createPoint(t, a), n = this._data[this._data.length - 1], r = n && n[n.length - 1], i = r && l.distanceTo(r) < this.minDistance;
                if (!r || !i) {
                    var s = this._addPoint(l), o = s.curve, u = s.widths;
                    o && u && this._drawCurve(o, u.start, u.end), this._data[this._data.length - 1].push({
                        "x": l.x,
                        "y": l.y,
                        "time": l.time,
                        "color": this.penColor
                    });
                }
            }, l.prototype._strokeEnd = function(e) {
                var t = this.points.length > 2, a = this.points[0];
                if (!t && a && this._drawDot(a), a) {
                    var l = this._data[this._data.length - 1], n = l[l.length - 1];
                    a.equals(n) || l.push({
                        "x": a.x,
                        "y": a.y,
                        "time": a.time,
                        "color": this.penColor
                    });
                }
                "function" == typeof this.onEnd && this.onEnd(e);
            }, l.prototype._handleMouseEvents = function() {
                this._mouseButtonDown = !1, this._canvas.addEventListener("mousedown", this._handleMouseDown), 
                this._canvas.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
            }, l.prototype._handleTouchEvents = function() {
                this._canvas.style.msTouchAction = "none", this._canvas.style.touchAction = "none", 
                this._canvas.addEventListener("touchstart", this._handleTouchStart), this._canvas.addEventListener("touchmove", this._handleTouchMove), 
                this._canvas.addEventListener("touchend", this._handleTouchEnd);
            }, l.prototype._reset = function() {
                this.points = [], this._lastVelocity = 0, this._lastWidth = (this.minWidth + this.maxWidth) / 2, 
                this._ctx.fillStyle = this.penColor;
            }, l.prototype._createPoint = function(t, a, l) {
                var n = this._canvas.getBoundingClientRect();
                return new e(t - n.left, a - n.top, l || new Date().getTime());
            }, l.prototype._addPoint = function(e) {
                var a = this.points, l = void 0;
                if (a.push(e), a.length > 2) {
                    3 === a.length && a.unshift(a[0]), l = this._calculateCurveControlPoints(a[0], a[1], a[2]);
                    var n = l.c2;
                    l = this._calculateCurveControlPoints(a[1], a[2], a[3]);
                    var r = l.c1, i = new t(a[1], n, r, a[2]), s = this._calculateCurveWidths(i);
                    return a.shift(), {
                        "curve": i,
                        "widths": s
                    };
                }
                return {};
            }, l.prototype._calculateCurveControlPoints = function(t, a, l) {
                var n = t.x - a.x, r = t.y - a.y, i = a.x - l.x, s = a.y - l.y, o = {
                    "x": (t.x + a.x) / 2,
                    "y": (t.y + a.y) / 2
                }, u = {
                    "x": (a.x + l.x) / 2,
                    "y": (a.y + l.y) / 2
                }, d = Math.sqrt(n * n + r * r), c = Math.sqrt(i * i + s * s), p = o.x - u.x, f = o.y - u.y, m = c / (d + c), h = {
                    "x": u.x + p * m,
                    "y": u.y + f * m
                }, v = a.x - h.x, b = a.y - h.y;
                return {
                    "c1": new e(o.x + v, o.y + b),
                    "c2": new e(u.x + v, u.y + b)
                };
            }, l.prototype._calculateCurveWidths = function(e) {
                var t = e.startPoint, a = e.endPoint, l = {
                    "start": null,
                    "end": null
                }, n = this.velocityFilterWeight * a.velocityFrom(t) + (1 - this.velocityFilterWeight) * this._lastVelocity, r = this._strokeWidth(n);
                return l.start = this._lastWidth, l.end = r, this._lastVelocity = n, this._lastWidth = r, 
                l;
            }, l.prototype._strokeWidth = function(e) {
                return Math.max(this.maxWidth / (e + 1), this.minWidth);
            }, l.prototype._drawPoint = function(e, t, a) {
                var l = this._ctx;
                l.moveTo(e, t), l.arc(e, t, a, 0, 2 * Math.PI, !1), this._isEmpty = !1;
            }, l.prototype._drawCurve = function(e, t, a) {
                var l = this._ctx, n = a - t, r = Math.floor(e.length());
                l.beginPath();
                for (var i = 0; i < r; i += 1) {
                    var s = i / r, o = s * s, u = o * s, d = 1 - s, c = d * d, p = c * d, f = p * e.startPoint.x;
                    f += 3 * c * s * e.control1.x, f += 3 * d * o * e.control2.x, f += u * e.endPoint.x;
                    var m = p * e.startPoint.y;
                    m += 3 * c * s * e.control1.y, m += 3 * d * o * e.control2.y, m += u * e.endPoint.y;
                    var h = t + u * n;
                    this._drawPoint(f, m, h);
                }
                l.closePath(), l.fill();
            }, l.prototype._drawDot = function(e) {
                var t = this._ctx, a = "function" == typeof this.dotSize ? this.dotSize() : this.dotSize;
                t.beginPath(), this._drawPoint(e.x, e.y, a), t.closePath(), t.fill();
            }, l.prototype._fromData = function(t, a, l) {
                for (var n = 0; n < t.length; n += 1) {
                    var r = t[n];
                    if (r.length > 1) for (var i = 0; i < r.length; i += 1) {
                        var s = r[i], o = new e(s.x, s.y, s.time), u = s.color;
                        if (0 === i) this.penColor = u, this._reset(), this._addPoint(o); else if (i !== r.length - 1) {
                            var d = this._addPoint(o), c = d.curve, p = d.widths;
                            c && p && a(c, p, u);
                        }
                    } else {
                        this._reset();
                        l(r[0]);
                    }
                }
            }, l.prototype._toSVG = function() {
                var e = this, t = this._data, a = this._canvas, l = Math.max(window.devicePixelRatio || 1, 1), n = a.width / l, r = a.height / l, i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                i.setAttributeNS(null, "width", a.width), i.setAttributeNS(null, "height", a.height), 
                this._fromData(t, function(e, t, a) {
                    var l = document.createElement("path");
                    if (!(isNaN(e.control1.x) || isNaN(e.control1.y) || isNaN(e.control2.x) || isNaN(e.control2.y))) {
                        var n = "M " + e.startPoint.x.toFixed(3) + "," + e.startPoint.y.toFixed(3) + " C " + e.control1.x.toFixed(3) + "," + e.control1.y.toFixed(3) + " " + e.control2.x.toFixed(3) + "," + e.control2.y.toFixed(3) + " " + e.endPoint.x.toFixed(3) + "," + e.endPoint.y.toFixed(3);
                        l.setAttribute("d", n), l.setAttribute("stroke-width", (2.25 * t.end).toFixed(3)), 
                        l.setAttribute("stroke", a), l.setAttribute("fill", "none"), l.setAttribute("stroke-linecap", "round"), 
                        i.appendChild(l);
                    }
                }, function(t) {
                    var a = document.createElement("circle"), l = "function" == typeof e.dotSize ? e.dotSize() : e.dotSize;
                    a.setAttribute("r", l), a.setAttribute("cx", t.x), a.setAttribute("cy", t.y), a.setAttribute("fill", t.color), 
                    i.appendChild(a);
                });
                var s = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ' + n + " " + r + '" width="' + n + '" height="' + r + '">', o = i.innerHTML;
                if (void 0 === o) {
                    var u = document.createElement("dummy"), d = i.childNodes;
                    u.innerHTML = "";
                    for (var c = 0; c < d.length; c += 1) u.appendChild(d[c].cloneNode(!0));
                    o = u.innerHTML;
                }
                var p = s + o + "</svg>";
                return "data:image/svg+xml;base64," + btoa(p);
            }, l.prototype.fromData = function(e) {
                var t = this;
                this.clear(), this._fromData(e, function(e, a) {
                    return t._drawCurve(e, a.start, a.end);
                }, function(e) {
                    return t._drawDot(e);
                }), this._data = e;
            }, l.prototype.toData = function() {
                return this._data;
            }, l;
        });
    },
    "193": function(e, t, a) {
        !function(t, a) {
            e.exports = a();
        }(0, function() {
            return function(e) {
                function t(l) {
                    if (a[l]) return a[l].exports;
                    var n = a[l] = {
                        "exports": {},
                        "id": l,
                        "loaded": !1
                    };
                    return e[l].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports;
                }
                var a = {};
                return t.m = e, t.c = a, t.p = "", t(0);
            }([ function(e, t) {
                "use strict";
                function a(e) {
                    var t = e.getContext("2d"), a = e.width, l = e.height, n = t.getImageData(0, 0, a, l).data, s = r(!0, a, l, n), o = r(!1, a, l, n), u = i(!0, a, l, n), d = i(!1, a, l, n), c = d - u + 1, p = o - s + 1, f = t.getImageData(u, s, c, p);
                    return e.width = c, e.height = p, t.clearRect(0, 0, c, p), t.putImageData(f, 0, 0), 
                    e;
                }
                function l(e, t, a, l) {
                    return {
                        "red": l[4 * (a * t + e)],
                        "green": l[4 * (a * t + e) + 1],
                        "blue": l[4 * (a * t + e) + 2],
                        "alpha": l[4 * (a * t + e) + 3]
                    };
                }
                function n(e, t, a, n) {
                    return l(e, t, a, n).alpha;
                }
                function r(e, t, a, l) {
                    for (var r = e ? 1 : -1, i = e ? 0 : a - 1, s = i; e ? s < a : s > -1; s += r) for (var o = 0; o < t; o++) if (n(o, s, t, l)) return s;
                    return null;
                }
                function i(e, t, a, l) {
                    for (var r = e ? 1 : -1, i = e ? 0 : t - 1, s = i; e ? s < t : s > -1; s += r) for (var o = 0; o < a; o++) if (n(s, o, t, l)) return s;
                    return null;
                }
                Object.defineProperty(t, "__esModule", {
                    "value": !0
                }), t["default"] = a;
            } ]);
        });
    },
    "196": function(e, t, a) {
        var l = a(149);
        "string" == typeof l && (l = [ [ e.id, l, "" ] ]);
        var n = {};
        n.transform = void 0;
        a(57)(l, n);
        l.locals && (e.exports = l.locals);
    },
    "197": function(e, t, a) {
        var l = a(150);
        "string" == typeof l && (l = [ [ e.id, l, "" ] ]);
        var n = {};
        n.transform = void 0;
        a(57)(l, n);
        l.locals && (e.exports = l.locals);
    },
    "198": function(e, t, a) {
        var l = a(151);
        "string" == typeof l && (l = [ [ e.id, l, "" ] ]);
        var n = {};
        n.transform = void 0;
        a(57)(l, n);
        l.locals && (e.exports = l.locals);
    },
    "199": function(e, t) {
        (function(t) {
            e.exports = t;
        }).call(t, {});
    },
    "551": function(e, t, a) {
        t = e.exports = a(55)(void 0), t.push([ e.id, ".approve-container {\n  margin: 0 10px;\n  padding: 0 20px;\n  height: 100%;\n  background: #ffffff;\n}\n.approve-container .breadcrumb {\n  padding: 20px 0;\n}\n", "" ]);
    },
    "1285": function(e, t, a) {
        var l = a(551);
        "string" == typeof l && (l = [ [ e.id, l, "" ] ]);
        var n = {};
        n.transform = void 0;
        a(57)(l, n);
        l.locals && (e.exports = l.locals);
    },
    "1291": function(e, t, a) {
        "use strict";
        function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            "value": !0
        });
        var n = a(10), r = l(n), i = a(16), s = l(i), o = a(17), u = l(o), d = a(18), c = l(d), p = a(20), f = l(p), m = a(19), h = l(m), v = a(4), b = l(v), y = a(7), g = a(9), C = l(g), E = a(69);
        a(1285);
        var w = {
            "qj": E.QJModal,
            "wp": E.WPModal,
            "jb": E.JBModal,
            "bx": E.BXModal,
            "cc": E.CCModal,
            "rc": E.RCModal,
            "wc": E.WCModal,
            "gw": E.GWModal
        }, S = function(e) {
            function t(e) {
                (0, u["default"])(this, t);
                var a = (0, f["default"])(this, (t.__proto__ || (0, s["default"])(t)).call(this, e));
                return a.handlePull = function() {
                    C["default"].get("/api/user/pending").then(function(e) {
                        var t = e.data.list, l = [];
                        t = t.map(function(e) {
                            switch (e.Cates) {
                              case "leave":
                                l.push((0, r["default"])({}, e, {
                                    "type": "qj",
                                    "Cates": "请假"
                                }));
                                break;

                              case "overtime":
                                l.push((0, r["default"])({}, e, {
                                    "type": "jb",
                                    "Cates": "加班"
                                }));
                                break;

                              case "expense":
                                l.push((0, r["default"])({}, e, {
                                    "type": "bx",
                                    "Cates": "报销"
                                }));
                                break;

                              case "businesstrip":
                                l.push((0, r["default"])({}, e, {
                                    "type": "cc",
                                    "Cates": "出差"
                                }));
                                break;

                              case "goout":
                                l.push((0, r["default"])({}, e, {
                                    "type": "wc",
                                    "Cates": "外出"
                                }));
                                break;

                              case "oagoods":
                                l.push((0, r["default"])({}, e, {
                                    "type": "wp",
                                    "Cates": "物品"
                                }));
                                break;

                              case "signing":
                                l.push((0, r["default"])({}, e, {
                                    "type": "gw",
                                    "Cates": "公文"
                                }));
                            }
                        }), a.setState({
                            "list": l
                        });
                    })["catch"](function(e) {});
                }, a.handleSearchChange = function(e) {
                    a.setState({
                        "search": e
                    });
                }, a.handleSearch = function() {
                    a.setState({
                        "list": []
                    }), C["default"].get("/api/search/my_approve", {
                        "params": {
                            "keyword": a.state.search,
                            "status": 0
                        }
                    }).then(function(e) {
                        var t = e.data.list, l = [];
                        t = t.map(function(e) {
                            switch (e.Cates) {
                              case "leave":
                                l.push((0, r["default"])({}, e, {
                                    "type": "qj",
                                    "Cates": "请假"
                                }));
                                break;

                              case "overtime":
                                l.push((0, r["default"])({}, e, {
                                    "type": "jb",
                                    "Cates": "加班"
                                }));
                                break;

                              case "expense":
                                l.push((0, r["default"])({}, e, {
                                    "type": "bx",
                                    "Cates": "报销"
                                }));
                                break;

                              case "businesstrip":
                                l.push((0, r["default"])({}, e, {
                                    "type": "cc",
                                    "Cates": "出差"
                                }));
                                break;

                              case "goout":
                                l.push((0, r["default"])({}, e, {
                                    "type": "wc",
                                    "Cates": "外出"
                                }));
                                break;

                              case "oagoods":
                                l.push((0, r["default"])({}, e, {
                                    "type": "wp",
                                    "Cates": "物品"
                                }));
                                break;

                              case "signing":
                                l.push((0, r["default"])({}, e, {
                                    "type": "gw",
                                    "Cates": "公文"
                                }));
                            }
                        }), a.setState({
                            "list": l,
                            "total": e.data.count
                        });
                    })["catch"](function(e) {});
                }, a.handleUpdate = function(e) {
                    var t = "", l = e.text;
                    switch (l.type) {
                      case "qj":
                        t = "/api/leaves/approval";
                        break;

                      case "jb":
                        t = "/api/overtimes/approval";
                        break;

                      case "bx":
                        t = "/api/expenses/approval";
                        break;

                      case "cc":
                        t = "/api/businesstrips/approval";
                        break;

                      case "wc":
                        t = "/api/goouts/approval";
                        break;

                      case "wp":
                        t = "/api/oagoods/approval";
                        break;

                      case "gw":
                        t = "/api/signing/approval";
                    }
                    a.index = e.index, C["default"].get(t, {
                        "params": {
                            "id": l.ApplyId
                        }
                    }).then(function(e) {
                        a.setState({
                            "total": e.data.length,
                            "type": l.type,
                            "formData": e.data,
                            "visible": !0
                        });
                    })["catch"](function(e) {});
                }, a.onChange = function(e) {
                    a.setState({
                        "current": e
                    });
                }, a.handleOk = function(e) {
                    var t = a.state.list;
                    a.index >= 0 && (t.splice(a.index, 1), a.setState({
                        "list": t,
                        "visible": !1
                    }));
                }, a.handleCancel = function() {
                    a.setState({
                        "visible": !1
                    });
                }, a.state = {
                    "current": 1,
                    "total": 0,
                    "formData": {},
                    "operationType": !0,
                    "list": [],
                    "search": "",
                    "type": "",
                    "visible": !1
                }, a.page = 1, a.num = 30, a.total = 0, a;
            }
            return (0, h["default"])(t, e), (0, c["default"])(t, [ {
                "key": "componentDidMount",
                "value": function() {
                    this.handlePull();
                }
            }, {
                "key": "render",
                "value": function() {
                    var e = this, t = this.state, a = t.list, l = t.operationType, n = t.type, r = t.formData, i = t.visible, s = [ {
                        "title": "申请人",
                        "width": "200",
                        "dataIndex": "Realname",
                        "render": function(e) {
                            return b["default"].createElement("a", null, e);
                        }
                    }, {
                        "title": "申请类型",
                        "width": "150",
                        "className": "column-money",
                        "dataIndex": "Cates"
                    }, {
                        "title": "申请理由",
                        "dataIndex": "Reason"
                    }, {
                        "title": "操作",
                        "key": "operation",
                        "width": "100",
                        "className": "column-operation",
                        "render": function(t, a, l) {
                            var n = {
                                "text": t,
                                "index": l
                            };
                            return b["default"].createElement("span", null, b["default"].createElement(y.Button, {
                                "type": "primary",
                                "htmlType": "submit",
                                "style": {
                                    "marginLeft": "10px"
                                },
                                "onClick": e.handleUpdate.bind(e, n)
                            }, "审批"));
                        }
                    } ], o = void 0;
                    if (n) {
                        var u = w[n], d = {
                            "visible": i,
                            "formData": r,
                            "onOk": this.handleOk,
                            "onCancel": this.handleCancel,
                            "operationType": l
                        };
                        o = b["default"].createElement(u, d);
                    }
                    return b["default"].createElement("div", {
                        "className": "approve-container"
                    }, b["default"].createElement("div", {
                        "className": "breadcrumb"
                    }, b["default"].createElement(y.Breadcrumb, {
                        "separator": ">"
                    }, b["default"].createElement(y.Breadcrumb.Item, null, b["default"].createElement(y.Icon, {
                        "type": "home"
                    })), b["default"].createElement(y.Breadcrumb.Item, {
                        "href": ""
                    }, "首页"), b["default"].createElement(y.Breadcrumb.Item, {
                        "href": ""
                    }, "待审批"))), b["default"].createElement("div", {
                        "style": {
                            "marginBottom": "15px"
                        }
                    }, b["default"].createElement(y.Select, {
                        "combobox": !0,
                        "style": {
                            "width": 200
                        },
                        "onChange": this.handleSearchChange,
                        "filterOption": !1,
                        "searchPlaceholder": "请输入账户名"
                    }, this.state.options), b["default"].createElement(y.Button, {
                        "type": "primary",
                        "htmlType": "submit",
                        "style": {
                            "margin": "0 10px"
                        },
                        "onClick": this.handleSearch
                    }, "搜索")), b["default"].createElement("div", null, b["default"].createElement(y.Table, {
                        "columns": s,
                        "dataSource": a,
                        "pagination": {
                            "total": this.state.total,
                            "current": this.state.current,
                            "showSizeChanger": !0,
                            "showQuickJumper": !0,
                            "onShowSizeChange": function(e, t) {},
                            "onShowQuickJumper": function(e) {},
                            "onChange": this.onChange
                        },
                        "bordered": !0,
                        "size": "middle"
                    })), o);
                }
            } ]), t;
        }(b["default"].Component);
        t["default"] = S;
    }
});