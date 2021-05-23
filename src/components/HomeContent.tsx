import React, { memo } from 'react';
import { IRouteComponentProps } from 'umi';

const Content: React.FC<Omit<IRouteComponentProps, 'children'>> = (props) => {

    return <> <span className="back" onClick={() => props.history.push('/')} >
        ← Back
    </span>
        <div className="markdown-body">
            {props.children}
        </div>
    </>
}

export default memo(Content)