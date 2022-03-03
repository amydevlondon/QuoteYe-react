import React from 'react';
import Button from './Button';

export const Error = () => {
    return (
        <div className="error">
            <h3>Awwww shit</h3>
            <p>Something went wrong</p>
            <Button text="Try again" />
        </div>
    );
};

export default Error;