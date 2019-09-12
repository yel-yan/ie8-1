import React from "react";
import {Spin} from "antd";

import Home from "bundle-loader?lazy&name=home!pages/Home/Home";
import UnCheck from "bundle-loader?lazy&name=home!pages/UnCheck/UnCheck";
import Approve from "bundle-loader?lazy&name=home!pages/Approve/Approve";
import DocSign from "bundle-loader?lazy&name=home!pages/DocSign/DocSign";
import News from "bundle-loader?lazy&name=home!pages/News/News";
import Schedule from "bundle-loader?lazy&name=home!pages/Schedule/Schedule";

//demo页
import DemoPage from "bundle-loader?lazy&name=antd-demos!pages/Page1/Page1";
import DemoSelect from "bundle-loader?lazy&name=demo-select!pages/UnCheck/UnCheck";


//doc页
import DocPage from "bundle-loader?lazy&name=docs!pages/UserInfo/UserInfo";
import DocReact from "bundle-loader?lazy&name=doc-react!pages/NotFound/NotFound";


import {bundle} from "./components/common-tools/Bundle";

const Empty = props => <div><Spin/>Loading</div>;
const NoAu = props => <div><Spin/>页面加载失败...</div>;
const HomePageBundle = bundle(Empty, Home, {type: "callback"});
const UnCheckPageBundle = bundle(Empty, UnCheck, {type: "callback"});
const ApprovePageBundle = bundle(Empty, Approve, {type: "callback"});
const DocSignPageBundle = bundle(Empty, DocSign, {type: "callback"});
const NewsPageBundle = bundle(Empty, News, {type: "callback"});
const SchedulePageBundle = bundle(Empty, Schedule, {type: "callback"});

//demo页
const DemoPageBundle = bundle(Empty, DemoPage, {type: "callback"});
const DemoSelectBundle = bundle(Empty, DemoSelect, {type: "callback"});

//doc页
const DocPageBundle = bundle(Empty, DocPage, {type: "callback"});
const DocReactBundle = bundle(Empty, DocReact, {type: "callback"});

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
