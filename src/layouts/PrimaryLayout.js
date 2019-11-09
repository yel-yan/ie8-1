import React from 'react'
import Header from "../components/common-views/Header";
import Sider from "../components/common-views/Sider";
import getRouter from 'router/router';

const PrimaryLayout = ({ match }) => (
    <div className="primary-layout">
        <Header/> 
        <Sider/>
        <div id="main">
            {getRouter(match)}
        </div>
    </div>
)
  
export default PrimaryLayout