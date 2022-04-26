import React from 'react';

export default function Post() {
    return (
        <div
            style={{
                marginTop: '20px',

                border: '1px gray groove',
                width: '500px',
                margin: 'auto',
                borderRadius: '5px',
                background: '#FFF',
                justifySelf: 'flex-start',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px',
                }}
            >
                <div style={{ display: 'flex' }}>
                    <img
                        alt="profilepic"
                        src="./img/Profile.jpg"
                        style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                        }}
                    />
                    <div style={{ marginLeft: '8px' }}>
                        <div style={{ Left: '0px' }}>Khamza TILYEK</div>
                        <div style={{ Left: '0px', fontSize: '12px' }}>
                            IT developer.test
                        </div>
                    </div>
                </div>
                <div style={{ padding: '10px' }}>
                    <img
                        style={{ width: '25px' }}
                        alt="more"
                        src="./img/icon/more.svg"
                    />
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <img
                    style={{ width: '100%', height: '100%' }}
                    alt="post"
                    src="./img/Profile.jpg"
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '80px',
                    }}
                >
                    <img
                        style={{ height: '25px', flex: 1 }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/heart.svg"
                    />
                    <img
                        style={{ height: '25px', flex: 1 }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/chat.svg"
                    />
                    <img
                        style={{ height: '25px', flex: 1 }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/chat.svg"
                    />
                </div>
                <div></div>
            </div>
        </div>
    );
}
