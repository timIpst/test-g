import React from 'react';

const Article = (props) => {
    let data = props.pageContext;

    return (
        <div>
            <h1>
                {data.title}
            </h1>

            <h3>
                {data.description}
            </h3>
        </div>
    );
};

export default Article;
