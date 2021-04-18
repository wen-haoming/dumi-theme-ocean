import React, { memo, useEffect } from 'react'
import { Row, Col, Space } from 'antd'
import { Link, useHistory, IRouteComponentProps } from 'umi'
import Icon, { HomeOutlined, FolderOpenOutlined, AppstoreOutlined, SmileOutlined } from '@ant-design/icons'
import { Time } from '@icon-park/react'
import HoverButton from '../utils/btn'

const menusArr = [
    {
        icon: HomeOutlined,
        text: '首页',
        link: '/'
    },
    {
        icon: AppstoreOutlined,
        text: '分类',
        link: '/categories'
    },
    {
        icon: () => <Time size="14" strokeWidth={5} />,
        text: '时间线',
        link: '/timeline'
    }, {
        icon: SmileOutlined,
        text: '关于',
        link: '/about'
    }
]


const Nav: React.FC<Omit<IRouteComponentProps,'children'>> = (props) => {

    const history = useHistory()



    return <header className={props.location.pathname === '/' ?'header img':'header'}>
    <nav className='nav'>
        <Row className='nav-wrap'>
            <Col className='nav-brand'>brand</Col>
            <Col className='nav-menus' xs={0} sm={0} md={10} lg={10} xl={10} >
                {menusArr.map((item, key) => <Space className='nav-item' key={key}>
                    <div onClick={() => history.push(item.link)}>
                        {<item.icon />}
                        <span>{item.text}</span>
                    </div>
                </Space>)}
            </Col>
            <Col className='nav-menus' xs={10} sm={10} md={0} lg={0} xl={0} >
                {/*  */}
            </Col>
        </Row>
    </nav>
    </header >

}

export default memo(Nav)