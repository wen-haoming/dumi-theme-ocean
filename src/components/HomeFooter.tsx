import React, { memo } from 'react'
import{BackTop} from 'antd'
import {RocketOne} from '@icon-park/react'

const style = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height: 50,
    width: 40,
    borderRadius: 4,
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    cursor:'pointer',
    boxShadow: `rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px`
};

const Footer = ()=>{

    return <> <footer className="footer">
        <div> Hexo  Fluid</div>
        <div>总访问量 111894 次</div>
        <div>总访客数 20035 人</div>
        <div>浙ICP备19029560号-1</div>
    </footer>
    <BackTop>
        <div style={style}>
            <RocketOne fill={['#4a90e2' ,'#2F88FF']} strokeWidth={3}/>
        </div>
    </BackTop>
    </>
}

export default memo(Footer)