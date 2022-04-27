import React from 'react';
import Logo from '../../components/Logo';

export default function index() {
    return (
        <div
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                background: '#F7F7F7',
                width: '100%',
                height: '1000px',
                padding: '50px',
            }}
        >
            <div
                style={{
                    background: '#fff',
                    width: '400px',
                    margin: ' auto ',
                    border: '2px groove #CFD5E9',
                    justifyContent: 'space-around',
                }}
            >
                <div style={{ padding: '50px 65px' }}>
                    <Logo />
                </div>
                <div style={{ padding: '0 40px' }}>
                    <input
                        style={{
                            border: '1px groove ',
                            borderRadius: '5px',
                            width: '100%',
                            height: '40px',
                            marginTop: '10px',
                            outline: 'none',
                            padding: '10px',
                        }}
                        placeholder="Phone number, username or email"
                    />
                    <input
                        style={{
                            border: '1px groove ',
                            borderRadius: '5px',
                            width: '100%',
                            height: '40px',
                            marginTop: '10px',
                            outline: 'none',
                            padding: '10px',
                        }}
                        placeholder="password"
                    />
                    <button
                        style={{
                            border: '1px groove ',
                            borderRadius: '5px',
                            width: '100%',
                            height: '40px',
                            marginTop: '10px',
                            outline: 'none',
                            padding: 'auto',
                            color: 'white',
                            background: '#86C6F5',
                        }}
                    >
                        Login
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                            style={{
                                border: '1px groove',
                                flex: '1',
                                height: '0px',
                            }}
                        ></div>
                        <div style={{ padding: '8px' }}>OR</div>
                        <div style={{ display: 'flex' }}></div>{' '}
                        <div
                            style={{
                                border: '1px groove',
                                flex: '1',
                                height: '0px',
                            }}
                        ></div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', padding: '5px' }}>
                    Log in with Facebook
                </div>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <a href="#">Forgot password?</a>
                </div>
            </div>
            <div
                style={{
                    background: '#fff',
                    width: '400px',
                    margin: ' auto ',
                    border: '2px groove #CFD5E9',
                    justifyContent: 'space-around',
                    marginTop: '20px',
                    textAlign: 'center',
                    padding: '20px',
                }}
            >
                Dont have account? <a href="#"> Sign up</a>
            </div>
        </div>
    );
}
