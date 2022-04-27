import { Grid } from '@mui/material';
import React from 'react';

export default function ProfilePost() {
    return (
        <div style={{ justifyContent: 'center' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '400px',
                    margin: 'auto',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        padding: '10px',
                        borderTop: 'groove 1px black',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        style={{ width: '25px', marginRight: '5px' }}
                        src="./img/icon/posts.svg"
                    />
                    Posts
                </div>
                <div
                    style={{
                        display: 'flex',
                        padding: '10px',
                        cursor: 'pointer',
                        marginTop: '-1px',
                    }}
                >
                    <img
                        style={{ width: '25px', marginRight: '5px' }}
                        src="./img/icon/save.svg"
                    />
                    Saved
                </div>
                <div
                    style={{
                        display: 'flex',
                        padding: '10px',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        style={{ width: '25px', marginRight: '5px' }}
                        src="./img/icon/tag.svg"
                    />
                    Tagged
                </div>
            </div>
            <Grid
                sx={{
                    marginTop: '20px',
                    width: '400px',
                    margin: 'auto',
                    justifyContent: 'space-between',
                    textAlign: 'center',
                }}
                container
                columns={4}
            >
                <Grid
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    xl={2}
                    sx={{ padding: '10px' }}
                >
                    <div
                        style={{
                            background: 'gray',
                            borderRadius: '10px',
                            height: '200px',
                        }}
                    >
                        s
                    </div>
                </Grid>
                <Grid
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    xl={2}
                    sx={{ padding: '10px' }}
                >
                    <div
                        style={{
                            background: 'gray',
                            borderRadius: '10px',
                            height: '200px',
                        }}
                    >
                        s
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
