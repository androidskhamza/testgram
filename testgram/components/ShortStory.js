import React from 'react';

export default function ShortStory() {
    const storys = [1, 2, 3, 4];
    return (
        <div
            style={{
                padding: '10px',
                border: '1px gray groove',
                display: 'flex',
                width: '500px',
                margin: 'auto',
                borderRadius: '5px',
                background: '#FFF',
            }}
        >
            {storys.map((story) => {
                return (
                    <div>
                        <img
                            alt="profilepic"
                            src="./img/Profile.jpg"
                            style={{
                                padding: '1px',
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                border: '2px solid  #fcb045',
                                marginRight: '8px',
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
