import { color } from '@mui/system';
import React from 'react';
import Header from '../../components/Header';
import Profile from '../../components/Profile';
import ProfilePost from '../../components/ProfilePost';

export default function index() {
    return (
        <div>
            <Header />
            {/* body */}
            <Profile />
            <ProfilePost />
        </div>
    );
}