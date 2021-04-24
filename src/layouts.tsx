import React, { memo, useMemo } from 'react';
import './style/layout.less';
import { IRouteComponentProps } from 'dumi';
import 'nprogress/nprogress.css';
import Nav from './components/Nav'
import HomeContent from './components/HomeContent'
import HomeFooter from './components/HomeFooter'
import Categories from './pages/Categories'

const LayoutContent: React.FC<IRouteComponentProps> = ({
    children,
    ...props
}) => {

 const Content =  useMemo(()=>{
    switch (props.location.pathname) {
        case '/':
            return HomeContent
        case '/categories':
            return Categories
        default:
            return HomeContent
    }
  },[props.location.pathname])

    return (
        <>
            <Nav {...props}/>
            <main className="main">
                <Content {...props}/>
            </main>
            <HomeFooter />
        </>
    )
};

export default memo(LayoutContent);
