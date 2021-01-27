import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import { Header } from '../lib/components/Header';
import styles from '../lib/styles/index.module.scss';

const desc = '';
const url = 'https://www.change-me.com';

const Index: NextPage = () => {
    return (
        <div className={styles.root}>
            <Head>
                <title>Change Me</title>
                <meta name="description" content={desc} />
                <meta property="og:description" content={desc} />
                <meta property="og:title" content="Change Me" />
                <meta property="og:image" content="" />
                <meta property="og:url" content={url} />
                <link rel="canonical" href={url} />
            </Head>

            <Header></Header>
        </div>
    );
};

export default Index;
