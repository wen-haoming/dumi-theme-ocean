import React, { memo, useState } from 'react'
import { Row, Col, Space } from 'antd'
import { Pagination } from 'antd';
import { CalendarTwoTone, TagTwoTone, AppstoreTwoTone } from '@ant-design/icons'
import img from '../style/home.jpeg'
import { NavLink, IRouteComponentProps } from 'umi'

const Content: React.FC<Omit<IRouteComponentProps, 'children'>> = (props) => {

    const [currentPage, setCurrentPage] = useState(1)

    const handleChange = (page) => {
        setCurrentPage(page)
    }

    return <> <div className="content" >
        {
            (props.route.routes).slice(currentPage * 5, (currentPage + 1) * 5).map((item, idx) => (
                <Row className="main-item" key={idx}>
                    <Col className="item-left" xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                        <img src={img} style={{ borderRadius: 5 }} width="100%" />
                    </Col>
                    <Col className="item-right" xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
                        <h1 className="item-title">
                            <NavLink to={item.path}>{item.title}</NavLink>
                        </h1>
                        <span className="item-des">
                            <NavLink to='/content'>titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle</NavLink>
                        </span>
                        <div className="item-footer">
                            <Space className="footer-item">
                                <CalendarTwoTone />
                                <span className="calendar-text">2020-10-24</span>
                            </Space>
                            <Space className="footer-item">
                                <AppstoreTwoTone />
                                <span className="calendar-text">2020-10-24</span>
                            </Space>
                            <Space className="footer-item">
                                <TagTwoTone />
                                <span className="calendar-text">2020-10-24</span>
                            </Space>
                        </div>
                    </Col>
                </Row>
            ))}
    </div>
        <Pagination
            size="small"
            className="pagination"
            onChange={handleChange}
            pageSize={5}
            defaultCurrent={currentPage}
            total={props.route.routes.length}
        />
    </>
}

export default memo(Content)