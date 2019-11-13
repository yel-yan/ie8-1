import React from 'react'

const Schedule = ({schedulelist}) => 
    <div>
        {
            schedulelist.length > 0 ?
            schedulelist.map((item, index) => (
                <div className="card-cell" key={index}>
                    <div className="cell-title">{item.reason}</div>
                    <div className="cell-extra">{item.start_at.split(' ')[0]}</div>
                </div>
            ))
            :
            <div className="card-cell-no">
                <div className="cell-title">暂无数据</div>
            </div>
        }
    </div>

export default Schedule