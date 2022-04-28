import React from 'react';
import Header from '../../components/Header';
import Profile from '../../components/Profile';
import ProfilePost from '../../components/ProfilePost';
import { AuthProvider } from '../authContext';
export default function index() {
    return (
        <AuthProvider>
            <div>
                <Header />
                <Profile />
                <ProfilePost />
            </div>
        </AuthProvider>
    );
}
