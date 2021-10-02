import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    data: PropTypes.array,
};
PostList.defaultProps = {
    data: [],
}

function PostList(props) {
    const { data } = props

    return (
        <ul>
            {data.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    );
}

export default PostList;