import { useRouter } from 'next/router';
import React from 'react';

export default function Logo({ styles }) {
    const router = useRouter();
    return (
        <img
            onClick={() => router.push('./')}
            className="lg:hidden"
            style={{ width: '250px', height: '50px' }}
            alt="LogoMain"
            src="./img/Logo.png"
        />
    );
}
