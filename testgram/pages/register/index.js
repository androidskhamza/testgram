import React from 'react';
import { useState } from 'react';
import Logo from '../../components/Logo';
import { useRouter } from 'next/router';
export default function index() {
    const router = useRouter();
    const [phone, getPhone] = useState('');
    const [username, getUsername] = useState('');
    const [password2, getPassword2] = useState('');
    const [password, getPassword] = useState('');
    const Signup = () => {
        if (phone == '') {
        }
        if (username == '') {
        }
        if (password == password2) {
        }
        if (phone !== '' && username !== '' && password == password2) {
            router.push('./login');
        }
    };
    return (
        <div
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                background: '#F7F7F7',
                width: '100%',
                height: '100vh',
                padding: '50px',
            }}
        >
            <div
                style={{
                    background: '#fff',
                    width: '350px',
                    margin: ' auto ',
                    border: '1px #CFD5E9 groove',
                    justifyContent: 'space-around',
                    paddingBottom: '20px',
                    fontSize: '12px',
                }}
            >
                <div style={{ padding: '50px 65px' }}>
                    <Logo />
                </div>
                <div style={{ padding: '0 40px' }}>
                    <button
                        style={{
                            color: 'white',
                            background: '#3965F2',
                            width: '100%',
                            height: '35px',
                            borderRadius: '5px',
                            fontSize: '15px',
                        }}
                    >
                        Log in with Facebook
                    </button>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                            style={{
                                borderTop: '1px groove',
                                flex: '1',
                                height: '0px',
                            }}
                        ></div>
                        <div style={{ padding: '8px' }}>OR</div>
                        <div style={{ display: 'flex' }}></div>
                        <div
                            style={{
                                borderTop: '1px groove',
                                flex: '1',
                                height: '0px',
                            }}
                        ></div>
                    </div>
                    <input
                        onChange={(e) => getPhone(e.target.value)}
                        style={{
                            border: '1px groove ',
                            borderRadius: '5px',
                            width: '100%',
                            height: '35px',
                            marginTop: '10px',
                            outline: 'none',
                            padding: '10px',
                        }}
                        placeholder="Phone number"
                        type="text"
                        maxLength={8}
                    />
                    <input
                        style={{
                            border: '1px groove ',
                            borderRadius: '5px',
                            width: '100%',
                            height: '35px',
                            marginTop: '10px',
                            outline: 'none',
                            padding: '10px',
                        }}
                        placeholder="Username"
                        onChange={(e) => getUsername(e.target.value)}
                        type="text"
                    />
                    <input
                        style={{
                            border: '1px groove ',
                            borderRadius: '5px',
                            width: '100%',
                            height: '35px',
                            marginTop: '10px',
                            outline: 'none',
                            padding: '10px',
                        }}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => getPassword(e.target.value)}
                    />
                    <input
                        style={{
                            border: '1px groove ',
                            borderRadius: '5px',
                            width: '100%',
                            height: '35px',
                            marginTop: '10px',
                            outline: 'none',
                            padding: '10px',
                        }}
                        type="password"
                        placeholder="re type Password"
                        onChange={(e) => getPassword2(e.target.value)}
                    />
                    <button
                        onClick={() => Signup()}
                        style={{
                            border: '1px groove ',
                            borderRadius: '5px',
                            width: '100%',
                            height: '40px',
                            marginTop: '10px',
                            outline: 'none',
                            padding: 'auto',
                            color: 'white',
                            background: '#3965F2',
                            fontSize: '15px',
                        }}
                    >
                        Sign up
                    </button>
                </div>
            </div>
            <div
                style={{
                    background: '#fff',
                    width: '350px',
                    margin: ' auto ',
                    border: '1px #CFD5E9 groove',
                    justifyContent: 'space-around',
                    marginTop: '20px',
                    textAlign: 'center',
                    padding: '20px ',
                }}
            >
                Have an account? <a href="./login">Log in</a>
            </div>
        </div>
    );
}
