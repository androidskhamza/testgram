import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Header from '../components/Header';
import ShortStory from '../components/ShortStory';
import Post from '../components/Post';
export default function Home() {
    return (
        <div
            style={{
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                background: '#F7F7F7',
                height: '1000px',
            }}
        >
            <Head>
                <title>TestGram</title>
            </Head>
            {/* head */}
            <Header />
            {/* body */}
            <div style={{ justifyContent: 'center', paddingTop: '20px' }}>
                <ShortStory />
                <Post />
            </div>
        </div>
    );
}
