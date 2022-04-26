import React from 'react';

export default function Logo({ styles }) {
    return (
        <img
            className="lg:hidden"
            style={{ width: '250px', height: '50px' }}
            alt="LogoMain"
            src="./img/Logo.png"
        />
    );
}
