import React, { memo, useEffect } from 'react';
import '../theme/style/layout.less';
import { IRouteComponentProps } from 'dumi';
import 'nprogress/nprogress.css';
import Nav from '../theme/components/Nav'
import HomeContent from '../theme/components/HomeContent'
import HomeFooter from '../theme/components/HomeFooter'

const LayoutContent: React.FC<IRouteComponentProps> = ({
    children,
    ...props
}) => {
    const isExact = props.match.isExact;

    return (
        <>
        <Nav/>
        <HomeContent/>
        <HomeFooter />
        </>
    );
};

export default memo(LayoutContent);
