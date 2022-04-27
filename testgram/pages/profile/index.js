import React from 'react';
import Header from '../../components/Header';
import Profile from '../../components/Profile';
import ProfilePost from '../../components/ProfilePost';

export default function index() {
    return (
        <div>
            <Header />
            <Profile />
            <ProfilePost />
        </div>
    );
}
