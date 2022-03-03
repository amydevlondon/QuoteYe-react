import React from 'react';

export const Button = ({ text }) => {
    const refresh = () => {
        window.location.reload();
    };
    return (<button className="btn" onClick={refresh}>{text}</button>);
};

export default Button;