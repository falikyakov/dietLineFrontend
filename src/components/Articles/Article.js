import React from 'react'

const Article = (props) => {
    return (
        <div className="article">
            <div className="articleTitle">
                {props.date}
                <h3>{props.title}</h3></div>
            {props.text}<br />
            <a href={props.web_url}>See More</a>
        </div>
    )
}

export default Article
