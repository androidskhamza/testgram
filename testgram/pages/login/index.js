import React from 'react';
import { useState } from 'react';
import Logo from '../../components/Logo';
import { useRouter } from 'next/router';
import { AuthProvider } from '../authContext';
import UserDataService from '../api/userdata';
import Cookies from 'js-cookie';
export default function index() {
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const Login = () => {
        let body = { email: phone, password: password };
        UserDataService.Login(body)
            .then((res) => {
                Cookies.set('token', res.data.token);
                router.push('./profile');
                
            })
            .catch((e) => {
                console.log('e', e);
            });
    };
    return (
        <AuthProvider>
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
                            placeholder="Phone"
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
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
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
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
                            onClick={() => Login()}
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
                        <a href="./recoverpassword">Forgot password?</a>
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
                    Dont have account? <a href="./register"> Sign up</a>
                </div>
            </div>
        </AuthProvider>
    );
}
