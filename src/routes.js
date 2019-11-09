import React from "react";
import {Spin} from "antd";

import Home from "bundle-loader?lazy&name=home!pages/Home/Home";
import UnCheck from "bundle-loader?lazy&name=unCheck!pages/UnCheck/UnCheck";
import Approve from "bundle-loader?lazy&name=approve!pages/Approve/Approve";
import DocSign from "bundle-loader?lazy&name=docSign!pages/DocSign/DocSign";
import News from "bundle-loader?lazy&name=news!pages/News/News";
import Schedule from "bundle-loader?lazy&name=schedule!pages/Schedule/Schedule";

import {bundle} from "./components/common-tools/Bundle";

const Empty = props => <div><Spin/>Loading</div>;
const NoAu = props => <div><Spin/>页面加载失败...</div>;
const HomePageBundle = bundle(Empty, Home, {type: "callback"});
const UnCheckPageBundle = bundle(Empty, UnCheck, {type: "callback"});
const ApprovePageBundle = bundle(Empty, Approve, {type: "callback"});
const DocSignPageBundle = bundle(Empty, DocSign, {type: "callback"});
const NewsPageBundle = bundle(Empty, News, {type: "callback"});
const SchedulePageBundle = bundle(Empty, Schedule, {type: "callback"});

const routes = [
    { type: "redirect", exact: true, strict: true, from: "/", to: "/home" },
    { type: "route", path: "/home", component: HomePageBundle },
    {type: "route", path: "/uncheck", component: UnCheckPageBundle},
    {type: "route", path: "/Approve", component: ApprovePageBundle},
    {type: "route", path: "/docsign", component: DocSignPageBundle},
    {type: "route", path: "/news", component: NewsPageBundle},
    {type: "route", path: "/schedule", component: SchedulePageBundle},
    {type: "route", component: NoAu},
];

export default routes;
