import AddButtonStyle from './addButton.css';
import React from 'react';

const AddButton = ({ onClick }) => {
    return (
        <div className={AddButtonStyle.button} onClick={onClick}>
            Add Feature
        </div>
    );
}

export default AddButton;