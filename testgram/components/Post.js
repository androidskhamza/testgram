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
                            cursor: 'pointer',
                        }}
                    />
                    <div style={{ marginLeft: '8px' }}>
                        <div style={{ Left: '0px', cursor: 'pointer' }}>
                            Khamza TILYEK
                        </div>
                        <div
                            style={{
                                Left: '0px',
                                fontSize: '12px',
                                cursor: 'pointer',
                            }}
                        >
                            IT developer.test
                        </div>
                    </div>
                </div>
                <div style={{ padding: '10px', cursor: 'pointer' }}>
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
                    }}
                >
                    <img
                        style={{
                            height: '25px',
                            flex: 1,
                            marginRight: '8px',
                            cursor: 'pointer',
                        }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/heart.svg"
                    />
                    <img
                        style={{
                            height: '25px',
                            flex: 1,
                            marginRight: '8px',
                            cursor: 'pointer',
                        }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/comment.svg"
                    />
                    <img
                        style={{ height: '25px', flex: 1, cursor: 'pointer' }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/chat.svg"
                    />
                </div>
                <div>
                    <img
                        style={{ height: '25px', flex: 1, cursor: 'pointer' }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/add.svg"
                    />
                </div>
            </div>
            <div style={{ padding: '10px', textAlign: 'left' }}>99 likes</div>
            <div
                style={{
                    padding: '10px',
                    borderBottom: '1px gray groove',
                    textAlign: 'left',
                }}
            >
                <div>comments:</div>
                <div>
                    <span style={{ fontWeight: '600' }}>Khamza TILYEK</span>
                    <span style={{ fontWeight: '400' }}> test comment</span>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '10px' }}>
                <div style={{ flex: 1 }}>
                    <img
                        style={{ height: '25px', flex: 1 }}
                        className="headerIcon"
                        alt="homeIcon"
                        src="./img/icon/smile.svg"
                    />
                </div>
                <div style={{ flex: 8 }}>
                    <input
                        style={{
                            border: 'none',
                            height: '100%',
                            width: '100%',
                            outline: 'none',
                        }}
                        placeholder="Add a comment..."
                    />
                </div>
                <div style={{ flex: 1, color: 'blue', cursor: 'pointer' }}>
                    Post
                </div>
            </div>
        </div>
    );
}
