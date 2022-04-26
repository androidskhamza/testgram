import React from 'react';

export default function Profile() {
    return (
        <div style={{ justifyContent: 'center', paddingTop: '20px' }}>
            <div
                style={{
                    display: 'flex',
                    width: '700px',
                    justifyContent: 'space-between',
                    margin: 'auto',
                    borderBottom: '1px groove gray',
                    padding: '20px',
                }}
            >
                <div style={{ flex: 1 }}>
                    <img
                        alt="profile"
                        src="./img/Profile.jpg"
                        style={{
                            objectFit: 'cover',
                            borderRadius: '50%',
                            width: '150px',
                        }}
                    />
                </div>

                <div
                    style={{
                        flex: 3,
                        justifyContent: 'center',
                        padding: '0 50px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '350px',
                            alignItems: 'center',
                        }}
                    >
                        <span style={{ fontSize: '30px' }}>Khamza9702</span>
                        <button
                            style={{
                                border: '1px gray groove',
                                fontSize: '12px',
                                borderRadius: '5px',
                                height: '30px',
                                width: '80px',
                            }}
                        >
                            Edit Profile
                        </button>
                        <img
                            style={{ width: '25px' }}
                            alt="settings"
                            src="./img/icon/settings.svg"
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '350px',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <span
                                style={{
                                    color: 'black',
                                    fontWeight: '500',
                                }}
                            >
                                12
                            </span>
                            <span style={{ color: 'gray', marginLeft: '3px' }}>
                                post
                            </span>
                        </div>
                        <div>
                            <span
                                style={{
                                    color: 'black',
                                    fontWeight: '500',
                                }}
                            >
                                12
                            </span>
                            <span style={{ color: 'gray', marginLeft: '3px' }}>
                                followers
                            </span>
                        </div>
                        <div>
                            <span
                                style={{
                                    color: 'black',
                                    fontWeight: '500',
                                }}
                            >
                                12
                            </span>
                            <span style={{ color: 'gray', marginLeft: '3px' }}>
                                following
                            </span>
                        </div>
                    </div>
                    <div>Khamza TILYEK | DEVELOPER</div>
                    <div style={{ color: 'gray' }}>
                        Khamza TILYEK | DEVELOPER
                    </div>
                    <div>Khamza TILYEK :) (: DEVELOPER</div>
                </div>
            </div>
        </div>
    );
}
