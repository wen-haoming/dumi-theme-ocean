import { IRouteComponentProps } from 'dumi';
import moment from 'moment';
import React from 'react';


const Home: React.FC<Omit<IRouteComponentProps, 'children'>> = props => {
    return (
        <ul className="list">
            {
                ((props.route || {}).routes || []).filter(item=>!item.meta.writing).filter(item => item.path !== '/').sort((a,b)=>b.meta.updatedTime - a.meta.updatedTime).map((item, idx) => (item.title && <li key={idx} className="list-item">
                    <time className="item-update">{moment(item.meta.updatedTime).format('l')}</time>
                    <p onClick={()=>{props.history.push(item.path);window.scrollTo(0,0)}} className="item-title">{item.title}</p>
                </li>))
            }
        </ul>
    )
};

export default Home;
