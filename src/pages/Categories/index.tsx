import React, { memo } from 'react'
import {Row,Col,Space} from 'antd'

const Categories = ()=>{

    return <>
        <div className="categories">
            <Space className="item-wrap">
                <div className="item">blog</div>
                <div className="item">blog2</div>
            </Space>
        </div>
    </>
}

export default memo(Categories)