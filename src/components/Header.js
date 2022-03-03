import React from 'react';
import Kanye from '../kanye.jpeg';

export const Header = () => {
    return (
        <header className="header">
            <img className="header-image" src={Kanye} alt="kanye west" />
            <div>
                <h1 className="title">
                    Kanye West
                    <br />
                    <span className="green">Quotes</span>
                </h1>
                <p className="sub-title">The good, the funny, and the problematic.</p>
            </div>
        </header>
    );
};

export default Header;