import React from 'react';
import Logo from './Logo';
import { Grid } from '@mui/material';
import { useState } from 'react';
import jsCookie from 'js-cookie';
import { useRouter } from 'next/router';
export default function Header() {
    const router = useRouter();
    const [menu, setMenu] = useState(false);
    const Logout = () => {
        jsCookie.remove('token');
        router.push('./login');
    };
    return (
        <Grid
            container
            columns={24}
            spacing={2}
            sx={{
                paddingTop: '20px',
                justifyContent: 'center',
                borderBottom: '1px gray solid',
                position: 'sticky',
                zIndex: '99',
            }}
        >
            {/* logo */}
            <Grid xs={4} sm={4} md={4} lg={4} xl={4}>
                <Logo />
            </Grid>
            {/* search */}
            <Grid
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                sx={{ padding: '8px', justifyContent: 'center' }}
            >
                <input
                    style={{
                        border: 'none',
                        background: 'whitesmoke',
                        width: '100%',
                        height: '30px',
                        borderRadius: '5px',
                        padding: '5px',
                    }}
                    placeholder="Search"
                />
            </Grid>
            {/* icons */}
            <Grid
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                sx={{ display: 'flex', padding: '8px 0px' }}
            >
                <div style={{ flex: 1 }}>
                    <img
                        style={{ height: '25px', cursor: 'pointer' }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/home.svg"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <img
                        style={{ height: '25px', cursor: 'pointer' }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/chat.svg"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <img
                        style={{ height: '25px', cursor: 'pointer' }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/add.svg"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <img
                        style={{ height: '25px', cursor: 'pointer' }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/navigation.png"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <img
                        style={{ height: '25px', cursor: 'pointer' }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/heart.svg"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <img
                        style={{
                            height: '30px',
                            width: '30px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            cursor: 'pointer',
                        }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/Profile.jpg"
                        onClick={() => setMenu(!menu)}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            width: '150px',
                            background: '#fff',
                            textAlign: 'center',
                            display: menu ? '' : 'none',
                            padding: '8px',
                        }}
                    >
                        <div onClick={() => router.push('./profile')}>
                            Profile
                        </div>
                        <div>Settings</div>
                        <div onClick={() => Logout()}>Logo out</div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
