import React from 'react'
import { timeStampToStr } from 'utils/common'
import './styles.less'

const New = ({newlist,onNewClick}) => 
    <div>
        {
            newlist.length > 0 ?
            newlist.map((item, index) => (
                <div className="card-cell" key={index} onClick={onNewClick.bind(this, item)}>
                    <div className="cell-title">{item.Title}</div>
                    <div className="cell-extra">{timeStampToStr(item.CreateAt, 'y年m月d日')}</div>
                </div>
            ))
            :
            <div className="card-cell-no">
                <div className="cell-title">暂无数据</div>
            </div>
        }
    </div>

export default New