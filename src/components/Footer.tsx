import React, { memo, useMemo } from 'react';
import { IRouteComponentProps } from 'umi';

const Footer: React.FC<Omit<IRouteComponentProps, 'children'>> = (props) => {

    let link = useMemo(() => {
        let tarIdx = props.route.routes.findIndex(item => item.path === props.location.pathname)
        let tarLeft = props.route.routes[tarIdx - 1] ? props.route.routes[tarIdx - 1] : false;
        let tarRight = props.route.routes[tarIdx + 1] ? props.route.routes[tarIdx + 1] : false;
        return {
            left: {
                path: tarLeft && tarLeft.path,
                title: tarLeft && tarLeft.title,
                cb: tarLeft ? ()=>{ props.history.push(tarLeft.path);window.scrollTo(0,0)}:()=>{}
            },
            right: {
                path: tarRight && tarRight.path,
                title: tarRight && tarRight.title,
                cb:  tarRight? ()=>{ props.history.push(tarRight.path);window.scrollTo(0,0)} : ()=>{}
            }
        }
    }, [props.location.pathname])

    return <>
        {
            !props.match.isExact && <nav className="footer-nav">
                <span className="prev">{link.left.title && <>←<a onClick={link.left.cb} className="prev">{link.left.title}</a></>}</span>
                <span className="next">{link.right.title && <><a onClick={link.right.cb} className="next">{link.right.title}</a>→</>}</span>
            </nav>
        }
        <footer className="footer">MIT Licensed | Copyright © 2021-present Hao Ming</footer>
    </>
}

export default memo(Footer)