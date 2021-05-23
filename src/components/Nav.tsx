import React, { memo } from 'react'
import { IRouteComponentProps } from 'umi'
import movielines from './data/movielines'

const Nav: React.FC<Omit<IRouteComponentProps, 'children'>> = (props) => {

    let randomMovielines = movielines[Math.floor(Math.random() * movielines.length)]

    return <>
        <nav className="nav">
            {!props.match.isExact ? <> <div className="sentence">{randomMovielines.saying}</div> <div className="from">———{randomMovielines.from}</div></> :<> <div className="home-name">HAOMING-WEN</div> <div className="home-subsentence">Whatever the mind can conceive and believe, the mind can achieve. <div>（只要你能想到、能相信, 你就能做到。）</div> </div></> }
        </nav>
        { props.match.isExact && <header className="header">
            <h1>Writing</h1>
        </header>}
    </>
}

export default memo(Nav)