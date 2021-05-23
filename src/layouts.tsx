import { IRouteComponentProps } from 'dumi';
import 'nprogress/nprogress.css';
import React, { memo, useMemo } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import HomeContent from './components/HomeContent';
import Nav from './components/Nav';
import './style/layout.less';


const LayoutContent: React.FC<IRouteComponentProps> = ({
    children,
    ...props
}) => {

 const Content =  useMemo(()=>{
    switch (props.location.pathname) {
        case '/':
            return Home
        default:
            return HomeContent
    }
  },[props.location.pathname])

    return (
        <>
            <Nav {...props}/>
            <main className="main">
                <Content {...props} >{children}</Content>
            </main>
            <Footer {...props} />
        </>
    )
};

export default memo(LayoutContent);
