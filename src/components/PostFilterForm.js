import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null,
};
function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null)
    if (!onSubmit) return;
    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(value);
        // if (typingTimeoutRef) clearTimeout();
        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                q: value
            };
            onSubmit(formValue);
        }, 300)
    };
    return (
        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    );
}
export default PostFilterForm;