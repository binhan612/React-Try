import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmitForm: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmitForm: null,
};

function TodoForm(props) {
    const { onSubmitForm } = props;
    const [value, setValue] = useState('');

    function handleOnChange(e) {
        setValue(e.target.value);
    };

    function handleOnSubmit(e) {
        e.preventDefault();
        if (!onSubmitForm) return;
        onSubmitForm(value);
        setValue('');
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input type='text' value={value} onChange={handleOnChange}></input>
        </form>
    );
}

export default TodoForm;